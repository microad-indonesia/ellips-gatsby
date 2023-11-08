import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import Navigation from '../../components/Navigation'
import ContactForm from '../../components/ContactForm'
import Footer from '../../components/Footer'
// import swal from "sweetalert";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import MetaTags from '../../components/MetaTags'

import './contact.scss'

import img_contact from '../../images/contact-us.png'

class ContactPage extends Component {
    render() {
        const { t } = this.props
        const { lang } = this.props.pageContext
        return (
            <div className="contact-page">
                <MetaTags
                    title="Ellips | Contact Us"
                    description={t('footer.subtitle')}
                    image={img_contact}
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Navigation activeLanguage={lang} />
                <ContactForm />
                <Container className="modify-padding">
                    <Row>
                        <Col>
                            <div className="container-contact-detail">
                                <div className="contact-detail">
                                    <a
                                        href="tel:+622180821166"
                                        className="d-block d-md-none"
                                    >
                                        {t('contact.phone')} : +6221 8082 1166
                                    </a>
                                    <h3 className="d-none d-md-block">
                                        {t('contact.phone')} : +6221 8082 1166
                                    </h3>
                                </div>

                                <div className="contact-detail">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    <a
                                        href="https://wa.me/6281113110900"
                                        className="d-block d-md-none"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        +628111 311 0900
                                    </a>
                                    <h3 className="d-none d-md-block">
                                        +628111 311 0900
                                    </h3>
                                </div>

                                <div className="contact-detail">
                                    <h3>
                                        {t('contact.operation')}
                                        <span> @ 8 am – 5 pm (GMT +7)</span>
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default withTrans(ContactPage)
