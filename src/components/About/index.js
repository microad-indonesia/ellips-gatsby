import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'

import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

import './about.scss'
import img_banner_og from '../../images/about-us-banner.png'
import img_banner from '../../images/about-us-banner-1310.png'
import img_banner_m from '../../images/about-us-banner-1310-m.png'
import img_about_1 from '../../images/about-us-1.png'
import img_about_2 from '../../images/about-us-2.png'
import img_about_3 from '../../images/about-us-3.png'
import gif_about from '../../images/about-ellips-small.gif'

class About extends Component {
    componentDidMount() {
        const isBrowser = typeof window !== 'undefined'
        const AOS = isBrowser ? require('aos') : undefined

        this.aos = AOS
        this.aos.init()
    }

    componentDidUpdate() {
        this.aos.refresh()
    }

    render() {
        const { t } = this.props
        const { lang } = this.props.pageContext
        return (
            <div className="about-page">
                <MetaTags
                    title={`Ellips | ${t('about.title')}`}
                    description={t('about.description')}
                    image={img_banner_og}
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Navigation activeLanguage={lang} />
                <div className="about-page-container">
                    <div className="banner-container">
                        <img
                            src={img_banner}
                            alt={`${t('about.title')}`}
                            className="img-fluid radius-bottom-right d-none d-md-block radius-bottom-right"
                        />
                        <img
                            src={img_banner_m}
                            alt={`${t('about.title')}`}
                            className="img-fluid radius-bottom-right d-block d-md-none radius-bottom-right"
                        />
                        <div className="page-title text-focus-in">
                            <h1>{t('about.title')}</h1>
                        </div>
                    </div>

                    <Container>
                        <Row>
                            <Col>
                                <div className="about-intro">
                                    <p>{t('about.description')}</p>
                                    <div className="section-title">
                                        <h3>
                                            <span>{t('about.subtitle')}</span>
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid style={{ overflowX: 'hidden' }}>
                        <Row className="row__1">
                            <Col sm={12} md={6} className="pl-0">
                                <div
                                    className="about-img"
                                    data-aos="zoom-in-right"
                                    data-aos-duration="700"
                                >
                                    <img
                                        src={img_about_1}
                                        alt={`${t(
                                            'about.title'
                                        )} Haircare - ${t(
                                            'about.section1.title'
                                        )}`}
                                        className="img-fluid"
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="pr-md-set">
                                <div className="about-text">
                                    <div className="section-title">
                                        <h3>{t('about.section1.title')}</h3>
                                    </div>
                                    <p
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        “{t('about.section1.content1')}” <br />
                                        <span>
                                            -{t('about.section1.content2')}-
                                        </span>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="row__2 position-relative">
                            <div className="light-pink-bg"></div>
                            <Col
                                sm={12}
                                md={{ span: 6, order: 1 }}
                                className="pl-md-set order-2"
                            >
                                <div className="about-text">
                                    <div className="section-title">
                                        <h3>{t('about.section2.title')}</h3>
                                    </div>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        “{t('about.section2.content1')}”
                                        <br />
                                        <span>
                                            -{t('about.section2.content2')}-
                                        </span>
                                    </p>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        {t('about.section2.content3')}
                                    </p>
                                </div>
                            </Col>
                            <Col
                                sm={12}
                                md={{ span: 6, order: 2 }}
                                className="pr-md-set order-1"
                            >
                                <div
                                    className="about-img"
                                    data-aos="zoom-in-left"
                                    data-aos-delay="500"
                                    data-aos-duration="700"
                                >
                                    <img
                                        src={img_about_2}
                                        alt={`${t(
                                            'about.title'
                                        )} Haircare - ${t(
                                            'about.section2.title'
                                        )}`}
                                        className="img-fluid"
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row className="row__3">
                            <Col sm={12} md={6} className="pl-md-set">
                                <div className="about-img">
                                    <img
                                        src={img_about_3}
                                        alt={`${t(
                                            'about.title'
                                        )} Haircare - ${t(
                                            'about.section3.title'
                                        )}`}
                                        className="img-fluid"
                                        data-aos="zoom-in-right"
                                        data-aos-duration="700"
                                    />
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="pr-md-set">
                                <div className="about-text">
                                    <div className="section-title">
                                        <h3>
                                            <span>
                                                {t('about.section3.title')}
                                            </span>
                                        </h3>
                                    </div>
                                    <ul
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <li>{t('about.section3.content1')}</li>
                                        <li>{t('about.section3.content2')}</li>
                                        <li>{t('about.section3.content3')}</li>
                                        <li>{t('about.section3.content4')}</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>

                        <Row className="row__4">
                            <Col sm={12} md={6} className="pl-md-set">
                                <div className="about-text">
                                    <div className="section-title">
                                        <h3>
                                            <span>
                                                {t('about.section4.title')}
                                            </span>
                                        </h3>
                                    </div>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-duration="1000"
                                    >
                                        {t('about.section4.content')}
                                    </p>
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="pr-md-0">
                                <div className="about-img">
                                    <img
                                        src={gif_about}
                                        alt={`${t(
                                            'about.title'
                                        )} Haircare - ${t(
                                            'about.section4.title'
                                        )}`}
                                        className="img-fluid"
                                        data-aos="zoom-in-left"
                                        data-aos-delay="500"
                                        data-aos-duration="1000"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        )
    }
}
export default withTrans(About)
