import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { withTrans } from '../../i18n/withTrans'
import { Slide, Zoom } from 'react-reveal'

import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HomepageSlider from '../HomepageSlider'
import HomepageBestie from '../HomepageBestie'
import HomepageProductCategory from '../HomepageProductCategory'
import HomepageTestimonial from '../HomepageTestimonial'
import HomepageArticle from '../HomepageArticle'
import HomepageGallery from '../HomepageGallery'

import './home.scss'
// import BeforeAfterImg from '../../images/revamp/ba-left.png'
// import BeforeAfterText from '../../images/revamp/ba-right.webp'
import BeforeAfterImg from '../../images/revamp/ba-left-new.png'
import BeforeAfterOldText from '../../images/revamp/ba-right-old.webp'
// import BeforeAfterNewText from '../../images/revamp/ba-right-new.png'

class Home extends Component {
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
        const {
            lang,
            homeSliderData,
            homeCategoryData,
            homeArticleData,
            homeReviewData,
            homeGalleryData,
        } = this.props.pageContext

        // window err in gatsby development
        // const isWindow = () => typeof window !== "undefined"

        return (
            <div className="homepage">
                <MetaTags
                    title="Ellips Haircare - No. 1 Hair Vitamin in Asia"
                    description={t('home.category.subtitle')}
                    image="https://cdn.ellipshaircare.id/268b5fff62b4b140464a8270aa0970730fcc3f70.jpg"
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Helmet>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        charset="UTF-8"
                        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                </Helmet>
                <Navigation activeLanguage={lang} />
                <section className="slider">
                    <HomepageSlider data={homeSliderData} />
                </section>
                <div className="homepage-wrapper">
                    <section className="home-bestie">
                        <HomepageBestie />
                    </section>
                    <section className="product-category">
                        <HomepageProductCategory data={homeCategoryData} />
                    </section>
                    <section className="before-after">
                        <Container fluid className="p-0">
                            <Zoom>
                                <Row className="m-0">
                                    <Col sm={12} md={6} className="p-0">
                                        <img
                                            src={BeforeAfterImg}
                                            alt="before-after"
                                            className="img-fluid"
                                        />
                                    </Col>
                                    <Col sm={12} md={6} className="p-0">
                                    {/*
                                        - adjust img
                                        - fix central img from design
                                          using old image
                                        - fix Gatsby window not available during server side rendering build error
                                    */}
                                    {/* {isWindow() && window.matchMedia("(max-width: 576px)").matches?
                                        <div className="img-wrapper"> <img
                                        src={BeforeAfterOldText}
                                        alt="before-after"
                                        className="img-fluid"
                                        />
                                        </div>
                                        :
                                        <img
                                        src={BeforeAfterText}
                                        alt="before-after"
                                        className="img-fluid"
                                        />
                                    } */}
                                    <div className='img-wrapper'>
                                    <img
                                        src={BeforeAfterOldText}
                                        alt="before-after"
                                        />
                                    </div>

                                    </Col>
                                </Row>
                            </Zoom>
                        </Container>
                    </section>
                    <section className="testimonial-article">
                        <Container fluid className="p-0">
                            <Row
                                className="position-relative row m-0"
                                style={{ overflowX: 'hidden' }}
                            >
                                <Col className="col-background box-testimonial">
                                    <Slide left>
                                        <HomepageTestimonial
                                            data={homeReviewData}
                                        />
                                    </Slide>
                                </Col>
                                <Col className="box-hairpedia p-0">
                                    <Slide right>
                                        <HomepageArticle
                                            data={homeArticleData}
                                        />
                                    </Slide>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="gallery">
                        <HomepageGallery data={homeGalleryData} />
                    </section>
                </div>
                <Footer activeLanguage={lang} />
            </div>
        )
    }
}

export default withTrans(Home)
