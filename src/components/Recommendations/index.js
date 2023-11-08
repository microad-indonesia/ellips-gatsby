import React, { Component } from 'react'
import { Container, Row, Col, NavLink } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

import 'swiper/css'
import 'swiper/css/navigation'
import './recommendations.scss'

// Image Component for Static Recommendation
import MaskSmoothShiny from '../../images/revamp/recommendation/ehm-smooth-shiny.png'
import MaskSmoothSilky from '../../images/revamp/recommendation/ehm-smooth-silky.png'
import MaskNutriColor from '../../images/revamp/recommendation/ehm-nutri-color.png'
import MaskHairRepair from '../../images/revamp/recommendation/ehm-hair-repair.png'
import MaskTreatment from '../../images/revamp/recommendation/ehm-hair-treatment.png'
import MaskSilkyBlack from '../../images/revamp/recommendation/ehm-silky-black.png'
import VitaminSmoothSilky from '../../images/revamp/recommendation/ehv-smooth-silky.webp'
import VitaminSmoothShiny from '../../images/revamp/recommendation/ehv-smooth-shiny.webp'
import VitaminUltra from '../../images/revamp/recommendation/ehv-utlra-treatment.png'
import VitaminTreatment from '../../images/revamp/recommendation/thumb-hair-treatment.webp'
import VitaminRepair from '../../images/revamp/recommendation/ehv-hair-repair.webp'
import VitaminSilkyBlack from '../../images/revamp/recommendation/ehv-silky-black.webp'
import VitaminShinyBlack from '../../images/revamp/recommendation/ehv-shiny-black.webp'
import BaliProtect from '../../images/revamp/recommendation/bali-nourish-protect.png'
import BaliSoften from '../../images/revamp/recommendation/bali-nourish-soften.png'
import ShampooBlossom from '../../images/revamp/recommendation/eds-blossom.png'

class Recommendations extends Component {
    render() {
        const { t } = this.props
        const lang = this.props.language
        const productSlug = this.props.product.slug
        // console.log('Data Recom = ', this.props)
        console.log('Product Slug =', this.props.product.slug)
        // console.log('Category Slug =', this.props.product.category.parent.slug)

        const recommendationMap = this.props.data.map((recommendation) => {
            // console.log('testing recom = ', recommendation)
            return (
                <div
                    key={recommendation._id}
                    className={
                        recommendation._id === this.props.data[0]._id
                            ? 'carousel-item active'
                            : 'carousel-item'
                    }
                >
                    <div className="product-display-wrapper">
                        <div className="product-display-img">
                            <img
                                src={recommendation.image_thumbnail}
                                alt={`Ellips Haircare Products - ${recommendation.name}`}
                                className="img-fluid"
                            />
                        </div>
                        <div className="product-name mont-medium">
                            <h3>{recommendation.name}</h3>
                        </div>
                        <LocalizedLink
                            activeLanguage={lang}
                            to={`${recommendation.slug}`}
                            className="btn btn-outline-primary btn-outline-primary__outline-black see-detail grow shrink mont-regular"
                        >
                            {t('common.button')}
                        </LocalizedLink>
                    </div>
                </div>
            )
        })

        const TitleRecommendation = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <div className="section-title mont-medium">
                            <h3>
                                <span>{t('recommendation.title1')}</span>{' '}
                                {t('recommendation.title2')}
                            </h3>
                        </div>
                    </div>
                </Col>
            )
        }

        const SmoothShinyVitamin = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminSmoothSilky}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Smooth & Silky
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-smooth-silky')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSmoothShiny}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Smooth & Shiny</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-smooth-shiny')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSmoothSilky}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Smooth & Silky</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-smooth-silky')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const NutriColorVitamin = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskNutriColor}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Nutri Color</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-nutri-color')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminUltra}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Ultra Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-ultra-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const HairTreatmentVitamin = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminRepair}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Vitamin Hair Repair</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-repair')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Hair Treatment</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskHairRepair}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Hair Repair</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-hair-repair')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const HairVitalityVitamin = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminUltra}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Ultra Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-ultra-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={ShampooBlossom}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Dry Shampoo Blossom</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.eds-blossom')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const ShinyBlackVitamin = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminSilkyBlack}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Vitamin Silky Black</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-silky-black')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSilkyBlack}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Silky Black</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-silky-black')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const ProHairRepair = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskHairRepair}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Hair Repair</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-hair-repair')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Hair Treatment</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const ProSmoothSilky = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminSmoothShiny}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Smooth & Shiny
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-smooth-shiny')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSmoothShiny}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Smooth & Shiny</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-smooth-shiny')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSmoothSilky}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Smooth & Silky</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-smooth-silky')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const ProSilkyBlack = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminShinyBlack}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Vitamin Shiny Black</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-shiny-black')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSilkyBlack}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Silky Black</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-silky-black')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const BaliNourishProtect = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={BaliSoften}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Nourish & Soften</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-nourish-soften')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Hair Treatment</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const BaliNourishSoften = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: 9000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={BaliProtect}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Nourish & Protect</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-nourish-protect')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminSmoothShiny}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Smooth & Shiny
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t(
                                                'home.bestie.product1.link2'
                                            )}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskSmoothShiny}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Smooth & Shiny</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-smooth-shiny')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        const UltraTreatment = () => {
            return (
                <Col sm={12}>
                    <div className="col-wrapper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                            navigation={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true,
                            }}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminRepair}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Vitamin Hair Repair</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-repair')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={VitaminTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>
                                            Ellips Hair Vitamin Hair Treatment
                                        </h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehv-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="list-product">
                                    <div className="box-img">
                                        <img
                                            src={MaskTreatment}
                                            alt="prodcut-recommendation"
                                        />
                                    </div>
                                    <div className="box-name mont-medium">
                                        <h3>Ellips Hair Mask Hair Treatment</h3>
                                    </div>
                                    <div className="box-button">
                                        <NavLink
                                            href={t('link.ehm-hair-treatment')}
                                            className="btn btn-recommendation mont-regular"
                                        >
                                            {t('common.button')}
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            )
        }

        if (productSlug === 'ellips-smooth-and-shiny') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <SmoothShinyVitamin />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-nutri-color') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <NutriColorVitamin />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-hair-treatment') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <HairTreatmentVitamin />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-hair-vitality') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <HairVitalityVitamin />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-shiny-black') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <ShinyBlackVitamin />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-hair-repair-1') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <ProHairRepair />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-smooth-and-silky') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <ProSmoothSilky />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-silky-black-1') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <ProSilkyBlack />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-nourish-and-protect') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <BaliNourishProtect />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-nourish-and-soften') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <BaliNourishSoften />
                        </Row>
                    </Container>
                </div>
            )
        } else if (productSlug === 'ellips-ultra-treatment') {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />
                            <UltraTreatment />
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return (
                <div className="recommendations-section">
                    <Container>
                        <Row>
                            <TitleRecommendation />

                            <Col sm={12}>
                                <div className="col-wrapper">
                                    <div
                                        className="product-display carousel slide"
                                        id="myCarousel"
                                        data-interval="false"
                                        data-ride="carousel"
                                        data-type="multi"
                                    >
                                        <div className="carousel-inner">
                                            {recommendationMap}
                                        </div>
                                        <a
                                            className="carousel-control-prev"
                                            href="#myCarousel"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <FontAwesomeIcon
                                                icon={faAngleLeft}
                                            ></FontAwesomeIcon>
                                        </a>
                                        <a
                                            className="carousel-control-next"
                                            href="#myCarousel"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <FontAwesomeIcon
                                                icon={faAngleRight}
                                            ></FontAwesomeIcon>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}

export default withTrans(Recommendations)
