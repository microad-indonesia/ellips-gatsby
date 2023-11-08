import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import { withTrans } from '../../i18n/withTrans'

import './testimonial.scss'
import imageTestimonial from '../../images/revamp/img-testimonial.webp'
import svg_start from '../../images/icons-and-logo/quote-start.svg'
import svg_end from '../../images/icons-and-logo/quote-end.svg'

class HomepageTestimonial extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = {
            count: 0,
        }
    }

    next() {
        this.slider.slickNext()
        this.setState((prev) => {
            return { count: prev.count < 2 ? prev.count + 1 : prev.count }
        })
    }

    previous() {
        this.slider.slickPrev()
        this.setState((prev) => {
            return { count: prev.count > 1 ? prev.count - 1 : false }
        })
    }

    render() {
        const data = this.props.data
        const itemsMap = data.map((item) => (
            <div className="homepage-testi-content" key={item._id}>
                <div className="testimonial mont-italic">
                    <p>{item.description}</p>
                </div>
                <div className="user-info">
                    <p>
                        <span className="mont-italic">
                            {item.reviewer_name}
                        </span>
                    </p>
                </div>
            </div>
        ))
        const { t } = this.props
        const settings = {
            dots: true,
            infinite: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 3000,
        }
        return (
            <div>
                <section className="homepage-testimonial mont-regular">
                    <Row className="m-0">
                        <Col sm={12} md={5} className="box-left">
                            <div className="position-relative title-image">
                                <div className="box-image">
                                    <img
                                        src={imageTestimonial}
                                        alt="Ellips Testimonial"
                                        className="img-fluid img-testimonial"
                                    />
                                </div>
                                <h3 className="title-section mont-regular">
                                    {t('home.review.title1')}
                                    <br></br>
                                    <span className="mont-bold">
                                        {t('home.review.title2')}
                                    </span>
                                </h3>
                            </div>
                        </Col>
                        <Col sm={12} md={7} className="box-right">
                            <img
                                src={svg_start}
                                alt="Ellips icons"
                                className="img-fluid quote-start"
                            />
                            <img
                                src={svg_end}
                                alt="Ellips icons"
                                className="img-fluid quote-end"
                            />
                            <Slider
                                ref={(c) => (this.slider = c)}
                                {...settings}
                                className="testimonial-container"
                            >
                                {itemsMap}
                            </Slider>
                            <div className="paging-wrapper">
                                <button
                                    className="slick-arrow slick-prev"
                                    onClick={this.previous}
                                >
                                    Previous
                                </button>
                                <button
                                    className="slick-arrow slick-next"
                                    onClick={this.next}
                                >
                                    Next
                                </button>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default withTrans(HomepageTestimonial)
