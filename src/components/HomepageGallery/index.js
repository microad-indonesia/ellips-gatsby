import React, { Fragment, useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import { Zoom } from 'react-reveal'

import './homepagegallery.scss'

export default function HomepageGallery(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const { t } = useTranslation()
    const { data: items } = props

    return (
        <div>
            <Container fluid>
                <Row className="m-0">
                    <Col className="p-0">
                        <div className="gallery-text">
                            <div className="section-title mont-medium">
                                <h3>{t('home.gallery.title1')}</h3>
                                <span>#{t('home.gallery.title2')}</span>
                            </div>
                            <div className="section-desc mont-medium">
                                <h5>{t('home.gallery.title3')}</h5>
                            </div>
                        </div>
                        <div className="gallery-feed">
                            {items.map((item) => {
                                return (
                                    <Fragment key={item._id}>
                                        {item.sequence === 3 ? (
                                            <div>
                                                <Zoom>
                                                    <div
                                                        className="button-wrapper"
                                                        // data-aos="zoom-out-up"
                                                        // data-aos-duration="900"
                                                        // data-aos-delay="400"
                                                    >
                                                        <Button
                                                            variant="primary"
                                                            onClick={handleShow}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faPlay}
                                                            ></FontAwesomeIcon>
                                                            <img
                                                                src={item.image}
                                                                alt="Ellips - Gallery"
                                                            />
                                                        </Button>
                                                    </div>
                                                </Zoom>

                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                >
                                                    <Modal.Body>
                                                        <iframe
                                                            title={item._id}
                                                            src={item.url}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        ) : (
                                            <a
                                                href={item.url}
                                                alt=""
                                                key={item._id}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Zoom>
                                                    <img
                                                        src={item.image}
                                                        alt="A gallery from Ellips Haircare's Instagram and Youtube"
                                                    />
                                                </Zoom>
                                            </a>
                                        )}
                                    </Fragment>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
