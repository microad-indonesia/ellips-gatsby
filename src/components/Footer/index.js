import React, { Component } from 'react'
import { Container, Row, Col, NavLink } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import FooterForm from '../FooterForm'
import LocalizedLink from '../LocalizedLink'
import { Slide } from 'react-reveal'

import './footer.scss'
import svg_ig from '../../images/icons-and-logo/ellips-socmed-instagram.svg'
import svg_fb from '../../images/icons-and-logo/ellips-socmed-facebook.svg'
import svg_yt from '../../images/icons-and-logo/ellips-socmed-youtube.svg'

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            scrolled: false,
        }
    }

    render() {
        const { t } = this.props
        const activeLanguage = this.props.language
        // console.log('Footer =', this.props)
        // console.log('Footer Lang =', activeLanguage)
        return (
            <footer className="mt-0 mt-md-3">
                <Container fluid>
                    <Row>
                        <Col sm={{ span: 12 }} className="bg-light-pink">
                            <Row>
                                <Col>
                                    <Slide right>
                                        <div className="footer-container">
                                            <div className="section-title mont-medium">
                                                <h2>{t('footer.title')}</h2>
                                            </div>
                                            <div className="cta-text mont-medium">
                                                <p>{t('footer.subtitle')}</p>
                                            </div>
                                            <FooterForm />
                                            <div className="footer-menu-links mont-medium">
                                                <NavLink
                                                    href={`/${activeLanguage}/hair-vitamin`}
                                                    target="_self"
                                                >
                                                    {t('category.hair-vitamin')}
                                                </NavLink>
                                                <NavLink
                                                    href={`/${activeLanguage}/hair-mask`}
                                                    target="_self"
                                                >
                                                    {t('category.hair-mask')}
                                                </NavLink>
                                                <NavLink
                                                    href={`/${activeLanguage}/dry-shampoo`}
                                                    target="_self"
                                                >
                                                    {t('category.dry-shampoo')}
                                                </NavLink>
                                                <NavLink
                                                    href={`/${activeLanguage}/about-ellips`}
                                                    target="_self"
                                                >
                                                    {t('menu.about')}
                                                </NavLink>
                                                <NavLink
                                                    href={`/${activeLanguage}/hairpedia`}
                                                    target="_self"
                                                >
                                                    {t('menu.hairpedia')}
                                                </NavLink>
                                                <NavLink
                                                    href={`/${activeLanguage}/contact-us`}
                                                    target="_self"
                                                >
                                                    {t('menu.contact')}
                                                </NavLink>

                                                {/* <LocalizedLink to="/hair-vitamin" target="_self">
                        {t("category.hair-vitamin")}
                      </LocalizedLink>
                      <LocalizedLink to="/hair-mask" target="_self">
                        {t("category.hair-mask")}
                      </LocalizedLink>
                      <LocalizedLink to="/dry-shampoo" target="_self">
                        {t("category.dry-shampoo")}
                      </LocalizedLink>
                      <LocalizedLink to="/about-ellips" target="_self">
                        {t("menu.about")}
                      </LocalizedLink>
                      <LocalizedLink to="/hairpedia" target="_self">
                        {t("menu.hairpedia")}
                      </LocalizedLink>
                      <LocalizedLink to="/contact-us" target="_self">
                        {t("menu.contact")}
                      </LocalizedLink> */}
                                            </div>
                                            <div className="footer-last-row-right mb-3 mb-md-0 d-block d-md-none">
                                                <div className="footer-socmed d-flex align-items-center">
                                                    <div className="socmed-icon instagram hvr-bob">
                                                        <a
                                                            href="https://www.instagram.com/ellips_haircare"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={svg_ig}
                                                                alt="ellips instagram"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="socmed-icon facebook hvr-bob">
                                                        <a
                                                            href="https://www.facebook.com/EllipsHaircare.Indonesia"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={svg_fb}
                                                                alt="ellips facebook"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="socmed-icon youtube hvr-bob">
                                                        <a
                                                            href="https://www.youtube.com/channel/UCC1PY6BO_faZeby6xu_Zb_w"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={svg_yt}
                                                                alt="ellips youtube"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer-last-row-left">
                                                <div className="copyright mont-medium">
                                                    <p>
                                                        © Copyright 2020
                                                        ELLIPSHaircare.id. All
                                                        right reserved.
                                                    </p>
                                                </div>
                                                <div className="footer-secondary-links mont-medium">
                                                    <LocalizedLink
                                                        to="/terms-and-conditions"
                                                        target="_self"
                                                    >
                                                        <p>{t('tnc.title')}</p>
                                                    </LocalizedLink>
                                                    <LocalizedLink
                                                        to="/privacy-policy"
                                                        target="_self"
                                                    >
                                                        <p>
                                                            {t('privacy.title')}
                                                        </p>
                                                    </LocalizedLink>
                                                </div>
                                            </div>
                                            <div className="footer-last-row-right d-none d-md-block">
                                                <div className="footer-socmed d-flex align-items-center justify-content-end">
                                                    <div className="socmed-icon instagram hvr-bob">
                                                        <a
                                                            href="https://www.instagram.com/ellips_haircare"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={svg_ig}
                                                                alt="ellips instagram"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="socmed-icon facebook hvr-bob">
                                                        <a
                                                            href="https://www.facebook.com/EllipsHaircare.Indonesia"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={svg_fb}
                                                                alt="ellips facebook"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="socmed-icon youtube hvr-bob">
                                                        <a
                                                            href="https://www.youtube.com/channel/UCC1PY6BO_faZeby6xu_Zb_w"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            <img
                                                                src={svg_yt}
                                                                alt="ellips youtube"
                                                                className="img-fluid"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </Slide>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default withTrans(Footer)
