import React, { Component } from 'react'
import Slider from 'react-slick'
import ReactHtmlParser from 'react-html-parser'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'
import { Zoom } from 'react-reveal'

import './slider.scss'
class HomepageSlider extends Component {
    render() {
        const { data: sliderContent } = this.props

        const sliderMap = sliderContent.map((slider) => (
            <div className="slider-content" key={slider._id} id={slider._id}>
                <div className={`slider-text position-${slider.subcategory}`}>
                    {ReactHtmlParser(slider.title)}
                </div>
                <LocalizedLink
                    to={slider.url}
                    target={slider.target}
                    className="d-none d-md-block"
                >
                    <Zoom>
                        <img
                            src={slider.image_desktop}
                            alt="Ellips - Homepage"
                            className="img-fluid"
                            // data-aos="fade-up"
                            // data-aos-delay="200"
                        />
                    </Zoom>
                </LocalizedLink>
                <LocalizedLink
                    to={slider.url}
                    target={slider.target}
                    className="d-block d-md-none"
                >
                    <Zoom>
                        <img
                            src={slider.image_mobile}
                            alt="Ellips - Homepage"
                            className="img-fluid"
                            // data-aos="fade-up"
                            // data-aos-duration="100"
                        />
                    </Zoom>
                </LocalizedLink>
            </div>
        ))
        const settings = {
            dots: true,
            arrows: false,
            fade: true,
            swipeToSlide: true,
            cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            autoplay: true,
            autoplaySpeed: 4000,
        }

        return (
            <div>
                <Slider {...settings} className="slider-container">
                    {sliderMap}
                </Slider>
            </div>
        )
    }
}

export default withTrans(HomepageSlider)
