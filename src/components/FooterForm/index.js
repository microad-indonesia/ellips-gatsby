import React, { useEffect, useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import axios from 'axios'
import swal from 'sweetalert'

export default function FooterForm() {
    // const [submitted, setSubmitted] = useState(false);
    const { t } = useTranslation()
    const [regions, setRegions] = useState({})

    useEffect(() => {
        axios
            .get(`${process.env.GATSBY_API_URL}/api/v1/regions`)
            .then((res) => {
                const data = res.data
                setRegions(data)
            })
    }, [])

    const {
        register,
        handleSubmit,
        setError,
        errors,
        reset,
        formState: { isSubmitting },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            await axios
                .post(`${process.env.GATSBY_API_URL}/api/v1/contact`, data)
                .then(function (response) {
                    console.log(response + ' FILE UPLOADED SUCCESSFULLY')
                })
            // setSubmitted(true);
            reset()
            swal({
                title: 'Thank You !',
                text: 'Email sent successfully.',
                icon: 'success',
            }).then(function () {
                const lang = localStorage.getItem('lang') || 'en'
                window.location.href = '/' + lang + '/contact-us?email=sent'
            })
        } catch {
            setError('submit', 'submitError')
        }
    }

    const showSubmitError = (msg) => <p className="msg-error">{msg}</p>

    const showForm = (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            className="d-block d-md-flex align-items-center justify-content-end"
            id="contactForm"
            method="post"
        >
            <Form.Group as={Col} className="mb-1 mb-md-0 mr-md-2 px-0">
                <select
                    name="country"
                    className="custom-select text-center form-control"
                    id="inputCountry"
                    ref={register({ required: true })}
                    disabled={isSubmitting}
                >
                    <option>{t('contact.option')}</option>
                    {Object.keys(regions).map((key) => {
                        return (
                            <option key={key} value={regions[key]}>
                                {regions[key]}
                            </option>
                        )
                    })}
                </select>
                {errors.country && (
                    <p className="required">This field is required</p>
                )}
            </Form.Group>
            <Form.Group as={Col} className="mb-1 mb-md-0 mr-md-2 px-0">
                <input
                    name="name"
                    type="text"
                    label={t('contact.name')}
                    className="input-name form-control"
                    id="inputName"
                    placeholder="Full Name"
                    ref={register({ required: true })}
                    disabled={isSubmitting}
                />
                {errors.name && (
                    <p className="required">This field is required</p>
                )}
            </Form.Group>
            <Form.Group as={Col} className="mb-1 mb-md-0 mr-md-2 px-0">
                <input
                    name="email"
                    type="email"
                    label={t('contact.email')}
                    className="input-email form-control"
                    id="inputEmail"
                    placeholder="Email"
                    ref={register({ required: true })}
                    disabled={isSubmitting}
                />
                {errors.email && (
                    <p className="required">This field is required</p>
                )}
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                className="btn-primary__fill-pink cta-submit mb-4 mb-md-0"
                disabled={isSubmitting}
            >
                {t('contact.submit')}
            </Button>
        </Form>
    )

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey="6Lfbc8MZAAAAAKQS_ra_uOMyGl9vsvrOUEGbmrsM"
            language="English"
        >
            <div className="cta-form">
                {errors &&
                    errors.submit &&
                    showSubmitError(errors.submit.message)}
                {showForm}
                {/* <Form
          onSubmit={handleSubmit(onSubmit)}
          className="d-block d-md-flex align-items-center justify-content-end"
          id="contactForm"
        >
          <Form.Group as={Col} className="mb-1 mb-md-0 mr-md-2 px-0">
            <select
              name="country"
              className="custom-select text-center form-control"
              id="inputCountry"
              ref={register({ required: true })}
            >
              <option>{t("contact.option")}</option>
              {Object.keys(regions).map((key) => {
                return (
                  <option key={key} value={regions[key]}>
                    {regions[key]}
                  </option>
                );
              })}
            </select>
            {errors.country && (
              <p className="required">This field is required</p>
            )}
          </Form.Group>
          <Form.Group as={Col} className="mb-1 mb-md-0 mr-md-2 px-0">
            <input
              name="name"
              type="text"
              label={t("contact.name")}
              className="input-name form-control"
              id="inputName"
              placeholder={t("contact.name")}
              ref={register({ required: true })}
            />
            {errors.name && <p className="required">This field is required</p>}
          </Form.Group>
          <Form.Group as={Col} className="mb-1 mb-md-0 mr-md-2 px-0">
            <input
              name="email"
              type="email"
              label={t("contact.email")}
              className="input-email form-control"
              id="inputEmail"
              placeholder={t("contact.email")}
              ref={register({ required: true })}
            />
            {errors.email && <p className="required">This field is required</p>}
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn-primary__fill-pink cta-submit mb-4 mb-md-0"
          >
            {t("contact.submit")}
          </Button>
        </Form> */}
            </div>
        </GoogleReCaptchaProvider>
    )
}
