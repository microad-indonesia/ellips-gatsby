import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import LocalizedLink from '../LocalizedLink'

import svg_logo from '../../images/icons-and-logo/ellips-logo.svg'
class TnC extends Component {
    render() {
        const { t } = this.props
        const { lang } = this.props.pageContext
        return (
            <div className="tnc-page">
                <MetaTags
                    title={`Ellips | ${t('tnc.title')}`}
                    description={t('tnc.section1.content')}
                    image={svg_logo}
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Navigation activeLanguage={lang} />
                <div className="page-container">
                    <Container>
                        <Row>
                            <Col>
                                <div className="page-title">
                                    <h1>{t('tnc.title')}</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-container">
                                    <p>
                                        <span>{t('tnc.section1.title')}</span>
                                        <br />
                                        {t('tnc.section1.content')}
                                    </p>
                                    <p>
                                        <span>{t('tnc.section2.title')}</span>
                                        <br />
                                        {t('tnc.section2.content1')}
                                        <br />
                                        {t('tnc.section2.content2')}
                                        <LocalizedLink
                                            target="_blank"
                                            to="/privacy-policy"
                                            style={{ color: '#007bff' }}
                                        >
                                            {t('tnc.section2.link')}
                                        </LocalizedLink>
                                    </p>
                                    <p>
                                        <span>{t('tnc.section3.title')}</span>
                                        <br />
                                        {t('tnc.section3.content1')}
                                        <br />
                                        {t('tnc.section3.content2')}
                                    </p>
                                    <p>
                                        <span>{t('tnc.section4.title')}</span>
                                        <br />
                                        {t('tnc.section4.content')}
                                    </p>
                                    <p>
                                        <span>{t('tnc.section5.title')}</span>
                                        <br />
                                        {t('tnc.section5.content')}
                                    </p>
                                    <p>
                                        <span>{t('tnc.section6.title')}</span>
                                        <br />
                                        {t('tnc.section6.content')}
                                    </p>
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

export default withTrans(TnC)
