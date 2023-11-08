import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import Navigation from '../../components/Navigation'
import MetaTags from '../MetaTags'
import Footer from '../../components/Footer'
import LocalizedLink from '../LocalizedLink'

import './hairpedia.scss'
import img_border from '../../images/icons-and-logo/hairpedia-border.png'
import img_article from '../../images/hairpedia-article.png'
import vid_hairpedia from '../../images/hairpedia-video.png'

class Hairpedia extends Component {
    render() {
        const { t } = this.props
        const { lang } = this.props.pageContext
        return (
            <div className="hairpedia-page">
                <MetaTags
                    title="Ellips | Hairpedia"
                    description={t('hairpedia.video.subtitle')}
                    image={vid_hairpedia}
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Navigation activeLanguage={lang} />
                <div className="hairpedia-page-wrapper">
                    <Container>
                        <div className="background-border">
                            <img
                                src={img_border}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                        <Row>
                            <Col>
                                <div className="page-title">
                                    <h1>{t('hairpedia.title')}</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row className="hairpedia-menu-row">
                            <Col sm={12} md={6} className="pr-0 pr-md-1">
                                <div className="hairpedia-menu hairpedia-menu__article slide-in-left">
                                    <img
                                        src={img_article}
                                        alt={`Ellips Hairpedia - ${t(
                                            'hairpedia.article.title1'
                                        )}`}
                                        className="img-fluid radius-top-left"
                                    />
                                    <div className="menu-title">
                                        <h2>
                                            {t('hairpedia.article.title1')}
                                            <br />
                                            {t('hairpedia.article.title2')}
                                        </h2>
                                    </div>
                                    <div className="menu-desc">
                                        <p>{t('hairpedia.article.subtitle')}</p>
                                    </div>
                                    <LocalizedLink
                                        to="/articles"
                                        className="btn see-detail grow shrink"
                                        target="_self"
                                    >
                                        {t('hairpedia.article.button')}
                                    </LocalizedLink>
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="pl-0 pl-md-1">
                                <div className="hairpedia-menu hairpedia-menu__video slide-in-right">
                                    <img
                                        src={vid_hairpedia}
                                        alt={`Ellips Hairpedia - ${t(
                                            'hairpedia.video.title'
                                        )}`}
                                        className="img-fluid radius-bottom-right"
                                    />
                                    <div className="menu-title">
                                        <h2>{t('hairpedia.video.title')}</h2>
                                    </div>
                                    <div className="menu-desc">
                                        <p>{t('hairpedia.video.subtitle')}</p>
                                    </div>
                                    <LocalizedLink
                                        to="/videos"
                                        className="btn see-detail grow shrink"
                                        target="_self"
                                    >
                                        {t('hairpedia.video.button')}
                                    </LocalizedLink>
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
export default withTrans(Hairpedia)
