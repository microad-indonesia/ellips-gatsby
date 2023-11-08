import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import LocalizedLink from '../LocalizedLink'

import svg_logo from '../../images/icons-and-logo/ellips-logo.svg'

class Privacy extends Component {
    render() {
        const { t } = this.props
        const { lang } = this.props.pageContext
        const tagListOne = [
            {
                description: t('privacy.section3.point1'),
                key: 1,
            },
            {
                description: t('privacy.section3.point2'),
                key: 2,
            },
            {
                description: t('privacy.section3.point3'),
                key: 3,
            },
        ]

        const tagListTwo = [
            {
                description: t('privacy.section6.point1'),
                key: 1,
            },
            {
                description: t('privacy.section6.point2'),
                key: 2,
            },
            {
                description: t('privacy.section6.point3'),
                key: 3,
            },
            {
                description: t('privacy.section6.point4'),
                key: 4,
            },
        ]

        const listCookies = [
            {
                description: t('privacy.section6.list1'),
                key: 1,
            },
            {
                description: t('privacy.section6.list2'),
                key: 2,
            },
            {
                description: t('privacy.section6.list3'),
                key: 3,
            },
            {
                description: t('privacy.section6.list4'),
                key: 4,
            },
        ]

        return (
            <div className="privacy-policy-page">
                <MetaTags
                    title={`Ellips | ${t('privacy.title')}`}
                    description={t('privacy.section1.content')}
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
                                    <h1>{t('privacy.title')}</h1>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="text-container">
                                    <p>
                                        <span>
                                            {' '}
                                            {t('privacy.section1.title')}{' '}
                                        </span>
                                        <br />
                                        {t('privacy.section1.content')}
                                    </p>
                                    <p>
                                        <span>
                                            {' '}
                                            {t('privacy.section2.title')}{' '}
                                        </span>
                                        <br />
                                        {t('privacy.section2.content')}
                                    </p>

                                    <p>
                                        <span>
                                            {' '}
                                            {t('privacy.section3.title')}{' '}
                                        </span>
                                        <br />
                                    </p>
                                    <ol className="tag-one">
                                        {tagListOne.map((item) => {
                                            return (
                                                <li key={item.key}>
                                                    {item.description}
                                                </li>
                                            )
                                        })}
                                    </ol>

                                    <p>
                                        <span>
                                            {' '}
                                            {t('privacy.section4.title')}{' '}
                                        </span>
                                    </p>
                                    <p>{t('privacy.section4.content1')} </p>

                                    <p>
                                        <span>
                                            {' '}
                                            {t('privacy.section5.title')}{' '}
                                        </span>
                                        <br />
                                        {t('privacy.section5.content')}
                                    </p>

                                    <p className="mb-1">
                                        <span>
                                            {' '}
                                            {t('privacy.section6.title')}{' '}
                                        </span>
                                        <br />
                                        {t('privacy.section6.content')}
                                    </p>
                                    <ol className="tag-cookies">
                                        {listCookies.map((item) => {
                                            return (
                                                <li key={item.key}>
                                                    {item.description}
                                                </li>
                                            )
                                        })}
                                    </ol>

                                    <ol className="tag-two">
                                        {tagListTwo.map((item) => {
                                            return (
                                                <li key={item.key}>
                                                    {item.description}
                                                </li>
                                            )
                                        })}
                                    </ol>

                                    <p>
                                        <span>
                                            {' '}
                                            {t('privacy.section7.title')}{' '}
                                        </span>
                                        <br />
                                        {t('privacy.section7.content')}
                                        <LocalizedLink
                                            target="_blank"
                                            to="/contact-us"
                                            style={{ color: '#007bff' }}
                                        >
                                            {t('privacy.section7.link')}
                                        </LocalizedLink>
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

export default withTrans(Privacy)
