import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import ReviewRate from '../ProductReviewRate'

import './product-review.scss'
import img_quote_start from '../../images/icons-and-logo/quote-start.svg'
import img_quote_end from '../../images/icons-and-logo/quote-end.svg'

class ProductReview extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goTo = this.goTo.bind(this)
        this.state = { currentSlide: 0 }
    }

    next() {
        this.slider.slickNext()
    }

    previous() {
        this.slider.slickPrev()
    }

    goTo(i) {
        this.slider.slickGoTo(i)
    }

    render() {
        const reviewMap = this.props.data.map((review) => (
            <div className="review-content mont-regular" key={review._id}>
                <div className="reviewer">
                    <p>{review.reviewer_name}</p>
                </div>
                <div className="review-date">
                    <p>{review.date}</p>
                </div>
                <div className="clearfix"></div>
                <ReviewRate review={review}></ReviewRate>
                <div className="review">
                    <p>{review.description}</p>
                </div>
            </div>
        ))

        const dots = []
        const page = Math.ceil(this.props.data.length / 2)
        for (let x = 0; x < page; x++) {
            dots.push(
                <li
                    className={
                        x === this.state.currentSlide ? 'slick-active' : ''
                    }
                >
                    <button onClick={() => this.goTo(x)}>{x + 1}</button>
                </li>
            )
        }

        const settings = {
            dots: false,
            infinite: true,
            speed: 800,
            rows: 2,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            swipeToSlide: true,
            beforeChange: (prev, next) => {
                this.setState({ currentSlide: next })
            },
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        rows: 1,
                    },
                },
            ],
        }

        return (
            <div className="product-review-section">
                <Container fluid>
                    <Row>
                        <Col className="bg-light-pink p-0">
                            <div className="review-section">
                                <div className="section-title mont-medium">
                                    <h3>
                                        <span>What</span> They Said
                                    </h3>
                                </div>
                                <img
                                    src={img_quote_start}
                                    alt="Ellips Icon"
                                    className="img-fluid quote-start-mobile"
                                />
                                <Slider
                                    ref={(c) => (this.slider = c)}
                                    {...settings}
                                    className="slider-container"
                                >
                                    {reviewMap}
                                </Slider>
                                <div className="paging-wrapper">
                                    <button
                                        className="slick-arrow slick-prev"
                                        onClick={this.previous}
                                    ></button>
                                    <ol className="slick-dots" id="dotsNew">
                                        {dots}
                                    </ol>
                                    <button
                                        className="slick-arrow slick-next"
                                        onClick={this.next}
                                    >
                                        Next
                                    </button>
                                </div>
                                <img
                                    src={img_quote_end}
                                    alt="Ellips Icon"
                                    className="img-fluid quote-end-mobile"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductReview
