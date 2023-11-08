import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './product-review-rate.scss'

class ReviewRate extends Component {
    render() {
        let rate = this.props.review ? this.props.review.rating : 0
        // let id = this.props.review ? this.props.review._id : "";
        if (this.props.data) {
            let i = 0,
                sum = 0
            while (i < this.props.data.length) {
                sum = sum + this.props.data[i++].rating
            }
            rate = Math.floor(sum / this.props.data.length)
            // id = new Date().getTime()
        }
        let stars = []
        for (let i = 0; i < rate; i++) {
            stars.push(<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>)
        }
        return <div className="review-rate">{rate > 0 && stars}</div>
    }
}

export default ReviewRate
