import React, { useLayoutEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '../LocalizedLink'
import { Fade, Zoom } from 'react-reveal'

import './product-category-home.scss'

function useMediaQuery() {
    const [screenSize, setScreenSize] = useState([0, 0])

    useLayoutEffect(() => {
        function updateScreenSize() {
            setScreenSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateScreenSize)
        updateScreenSize()
        return () => window.removeEventListener('resize', updateScreenSize)
    }, [])

    return screenSize
}

export default function HomepageProductCategory(props) {
    const [width] = useMediaQuery()
    const { t } = useTranslation()
    const items = props.data

    return (
        <Container>
            <Row>
                <Col sm={12} className="text-center mb-2 mb-md-4">
                    <Fade down>
                        <div className="section-title mont-medium">
                            <h3>
                                <span>{t('home.category.title1')}</span>{' '}
                                {t('home.category.title2')}
                            </h3>
                        </div>
                    </Fade>
                    <Fade up>
                        <div className="section-desc mont-regular">
                            <p>{t('home.category.subtitle')}</p>
                        </div>
                    </Fade>
                </Col>
            </Row>

            <div
                className={width < 767 ? 'carousel slide' : ''}
                id="categoryCarousel"
                data-interval="false"
                // interval={5000}
                // data-aos={width < 767 ? 'fade-up' : ''}
            >
                <Row className="mx-1">
                    <div className={width < 767 ? 'carousel-inner' : 'row'}>
                        {items.map((item) => {
                            return (
                                <Col
                                    sm={12}
                                    md={4}
                                    key={item._id}
                                    className={
                                        width > 767
                                            ? 'product-category-container'
                                            : width < 767 && item.sequence === 1
                                            ? 'product-category-container carousel-item active'
                                            : 'product-category-container carousel-item'
                                    }
                                    // data-aos={width < 767 ? '' : 'fade-up'}
                                    // data-aos-delay={
                                    //     item.sequence === 3
                                    //         ? '400'
                                    //         : item.sequence === 2
                                    //         ? '200'
                                    //         : ''
                                    // }
                                    // data-aos-duration="500"
                                >
                                    <Zoom>
                                        <div className="product-category-content">
                                            <LocalizedLink to={`/${item.slug}`}>
                                                <div className="product-image">
                                                    <img
                                                        src={item.image}
                                                        alt={`Ellips - ${t(
                                                            `category.${item.slug}`
                                                        )}`}
                                                        className="img-fluid w-100 d-block"
                                                    />
                                                </div>
                                                <div className="product-text">
                                                    <div className="product-title mont-bold">
                                                        <h2>
                                                            {t(
                                                                `category.${item.slug}`
                                                            )}
                                                        </h2>
                                                    </div>
                                                    <div className="product-desc mont-regular">
                                                        <p>
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </LocalizedLink>
                                            <LocalizedLink
                                                to={`/${item.slug}`}
                                                className="btn btn-outline-primary btn-outline-primary__outline-black see-detail grow shrink mont-regular"
                                            >
                                                {t('common.button')}
                                            </LocalizedLink>
                                        </div>
                                    </Zoom>
                                </Col>
                            )
                        })}
                    </div>
                    <a
                        className="carousel-control-prev d-block d-md-none"
                        href="#categoryCarousel"
                        role="button"
                        data-slide="prev"
                    >
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </a>
                    <a
                        className="carousel-control-next d-block d-md-none"
                        href="#categoryCarousel"
                        role="button"
                        data-slide="next"
                    >
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </a>
                </Row>
            </div>
        </Container>
    )
}
