import React, { useEffect, useState } from 'react'
import { Form, Col, Row, Button, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import axios from 'axios'
import swal from 'sweetalert'
import img_contact from '../../images/contact-us.png'
import img_contact_m from '../../images/contact-us-m.png'

const ContactFormPage = () => {
    const [regions, setRegions] = useState({})
    const { t } = useTranslation()

    useEffect(() => {
        axios
            .get(`${process.env.GATSBY_API_URL}/api/v1/regions`)
            .then((res) => {
                const data = res.data
                setRegions(data)
            })
            .catch((err) => console.log(err))
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
        <Form onSubmit={handleSubmit(onSubmit)} id="contactForm" method="post">
            <Form.Group as={Col} className="px-0">
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
            <Form.Group as={Col} className="px-0">
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
            <Form.Group as={Col} className="px-0">
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
            <Form.Group as={Col} className="px-0">
                <textarea
                    name="message"
                    rows="8"
                    label={t('contact.message')}
                    placeholder={t('contact.message')}
                    ref={register({ required: true })}
                />
                {errors.message && (
                    <p className="required">This field is required</p>
                )}
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                className="btn-primary__fill-pink cta-submit"
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
            <Container fluid className="px-0">
                <Row noGutters className="margin-row">
                    <Col sm={12} md={7}>
                        <div className="contact-image">
                            <img
                                src={img_contact}
                                alt=""
                                className="img-fluid d-none d-md-block"
                            />
                            <img
                                src={img_contact_m}
                                alt=""
                                className="img-fluid d-block d-md-none"
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <div className="page-title">
                            <h1>{t('contact.title')}</h1>
                        </div>
                        <div className="contact-form">
                            {errors &&
                                errors.submit &&
                                showSubmitError(errors.submit.message)}
                            {showForm}
                        </div>
                    </Col>
                </Row>
            </Container>
        </GoogleReCaptchaProvider>
    )
}

export default ContactFormPage
