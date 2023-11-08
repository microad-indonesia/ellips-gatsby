import React, { Component } from 'react'
import { Row, Col, NavLink } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { withTrans } from '../../i18n/withTrans'
import { Slide, Fade } from 'react-reveal'

import 'swiper/css'
import 'swiper/css/navigation'
import './homeBestie.scss'

import BestieDry from '../../images/revamp/bestie-2.webp'
import BestieColored from '../../images/revamp/bestie-3.webp'
import BestieFragile from '../../images/revamp/bestie-4.webp'
import vitaminTreatment from '../../images/revamp/product/blister-hair-treatment.webp'
import maskTreatment from '../../images/revamp/product/hm-treatment.png'
import vitaminNutriColor from '../../images/revamp/product/blister-nutri-color.webp'
import maskNutriColor from '../../images/revamp/product/hm-nutri-color.png'
import vitaminVitality from '../../images/revamp/product/blister-hair-vitality.webp'
import maskVolume from '../../images/revamp/product/hm-volume-miracle.png'

class SwiperMobile extends Component {
    render() {
        const { t } = this.props
        return (
            <div>
                <Swiper
                    autoHeight={true}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="box-image">
                            <Fade up>
                                <img
                                    src={BestieDry}
                                    alt="Bestie Dry"
                                    className="img-fluid"
                                />
                            </Fade>
                        </div>

                        <div className="box-text">
                            <Fade up>
                                <div className="title-bestie">
                                    <h3 className="mont-bold">
                                        {t('home.bestie.category1')}
                                    </h3>
                                </div>
                            </Fade>
                            <Fade up>
                                <div className="desc-bestie">
                                    <p className="text">
                                        {t('home.bestie.content.description1')}
                                    </p>
                                </div>
                            </Fade>
                            <div className="box-recomendation">
                                <Fade up>
                                    <div className="title-recomendation">
                                        <h3 className="mont-bold">
                                            {t(
                                                'home.bestie.recommendation.title'
                                            )}
                                        </h3>
                                    </div>
                                </Fade>
                                <Row className="recomendation-item">
                                    <Col className="item">
                                        <Slide left>
                                            <NavLink
                                                href={t(
                                                    'home.bestie.product1.link1'
                                                )}
                                                className="p-0 grow shrink"
                                            >
                                                <div className="title mont-semi">
                                                    Ellips Hair Vitamin Hair
                                                    Treatment
                                                </div>
                                                <div className="box-image">
                                                    <img
                                                        src={vitaminTreatment}
                                                        alt="Hair Treatment"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <NavLink
                                                    href={t(
                                                        'home.bestie.product1.link1'
                                                    )}
                                                    className="btn btn-link__product"
                                                >
                                                    {t(
                                                        'home.bestie.recommendation.button'
                                                    )}
                                                </NavLink>
                                            </NavLink>
                                        </Slide>
                                    </Col>
                                    <Col className="item">
                                        <Slide right>
                                            <NavLink
                                                href={t(
                                                    'home.bestie.product1.link2'
                                                )}
                                                className="p-0 grow shrink"
                                            >
                                                <div className="title mont-semi">
                                                    Ellips Hair Mask Hair
                                                    Treatment
                                                </div>
                                                <div className="box-image">
                                                    <img
                                                        src={maskTreatment}
                                                        alt="Hair Treatment"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <NavLink
                                                    href={t(
                                                        'home.bestie.product1.link2'
                                                    )}
                                                    className="btn btn-link__product"
                                                >
                                                    {t(
                                                        'home.bestie.recommendation.button'
                                                    )}
                                                </NavLink>
                                            </NavLink>
                                        </Slide>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box-image">
                            <Fade up>
                                <img
                                    src={BestieColored}
                                    alt="Bestie Dry"
                                    className="img-fluid"
                                />
                            </Fade>
                        </div>
                        <div className="box-text">
                            <Fade up>
                                <div className="title-bestie">
                                    <h3 className="mont-bold">
                                        {t('home.bestie.category2')}
                                    </h3>
                                </div>
                            </Fade>
                            <Fade up>
                                <div className="desc-bestie">
                                    <p className="text">
                                        {t('home.bestie.content.description2')}
                                    </p>
                                </div>
                            </Fade>
                            <div className="box-recomendation">
                                <div className="title-recomendation">
                                    <Fade up>
                                        <h3 className="mont-bold">
                                            {t(
                                                'home.bestie.recommendation.title'
                                            )}
                                        </h3>
                                    </Fade>
                                </div>
                                <Row className="recomendation-item">
                                    <Col className="item">
                                        <Slide left>
                                            <NavLink
                                                href={t(
                                                    'home.bestie.product2.link1'
                                                )}
                                                className="p-0 grow shrink"
                                            >
                                                <div className="title mont-semi">
                                                    Ellips Hair Vitamin Nutri
                                                    Color
                                                </div>
                                                <div className="box-image">
                                                    <img
                                                        src={vitaminNutriColor}
                                                        alt="Nutri Color"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <NavLink
                                                    href={t(
                                                        'home.bestie.product2.link1'
                                                    )}
                                                    className="btn btn-link__product"
                                                >
                                                    {t(
                                                        'home.bestie.recommendation.button'
                                                    )}
                                                </NavLink>
                                            </NavLink>
                                        </Slide>
                                    </Col>
                                    <Col className="item">
                                        <Slide right>
                                            <NavLink
                                                href={t(
                                                    'home.bestie.product2.link2'
                                                )}
                                                className="p-0 grow shrink"
                                            >
                                                <div className="title mont-semi">
                                                    Ellips Hair Mask Nutri Color
                                                </div>
                                                <div className="box-image">
                                                    <img
                                                        src={maskNutriColor}
                                                        alt="Nutri Color"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <NavLink
                                                    href={t(
                                                        'home.bestie.product2.link2'
                                                    )}
                                                    className="btn btn-link__product"
                                                >
                                                    {t(
                                                        'home.bestie.recommendation.button'
                                                    )}
                                                </NavLink>
                                            </NavLink>
                                        </Slide>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="box-image">
                            <Fade up>
                                <img
                                    src={BestieFragile}
                                    alt="Bestie Dry"
                                    className="img-fluid"
                                />
                            </Fade>
                        </div>
                        <div className="box-text">
                            <Fade up>
                                <div className="title-bestie">
                                    <h3 className="mont-bold">
                                        {t('home.bestie.category3')}
                                    </h3>
                                </div>
                            </Fade>
                            <Fade up>
                                <div className="desc-bestie">
                                    <p className="text">
                                        {t('home.bestie.content.description3')}
                                    </p>
                                </div>
                            </Fade>
                            <div className="box-recomendation">
                                <div className="title-recomendation">
                                    <Fade up>
                                        <h3 className="mont-bold">
                                            {t(
                                                'home.bestie.recommendation.title'
                                            )}
                                        </h3>
                                    </Fade>
                                </div>
                                <Row className="recomendation-item">
                                    <Col className="item">
                                        <Slide left>
                                            <NavLink
                                                href={t(
                                                    'home.bestie.product3.link1'
                                                )}
                                                className="p-0 grow shrink"
                                            >
                                                <div className="title mont-semi">
                                                    Ellips Hair Vitamin Hair
                                                    Vitality
                                                </div>
                                                <div className="box-image">
                                                    <img
                                                        src={vitaminVitality}
                                                        alt="Hair Vitality"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <NavLink
                                                    href={t(
                                                        'home.bestie.product3.link1'
                                                    )}
                                                    className="btn btn-link__product"
                                                >
                                                    {t(
                                                        'home.bestie.recommendation.button'
                                                    )}
                                                </NavLink>
                                            </NavLink>
                                        </Slide>
                                    </Col>
                                    <Col className="item">
                                        <Slide right>
                                            <NavLink
                                                href={t(
                                                    'home.bestie.product3.link2'
                                                )}
                                                className="p-0 grow shrink"
                                            >
                                                <div className="title mont-semi">
                                                    Ellips Hair Mask Volume
                                                    Miracle
                                                </div>
                                                <div className="box-image">
                                                    <img
                                                        src={maskVolume}
                                                        alt="Volume Miracle"
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <NavLink
                                                    href={t(
                                                        'home.bestie.product3.link2'
                                                    )}
                                                    className="btn btn-link__product"
                                                >
                                                    {t(
                                                        'home.bestie.recommendation.button'
                                                    )}
                                                </NavLink>
                                            </NavLink>
                                        </Slide>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}
export default withTrans(SwiperMobile)
