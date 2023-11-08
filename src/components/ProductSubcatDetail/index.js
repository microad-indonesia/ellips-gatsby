import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import MetaTags from '../MetaTags'

import './product-subcat-detail.scss'

class ProductSubcatDetail extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="subcategory-container">
                {this.props.active.description && (
                    <MetaTags
                        title={`Ellips | ${this.props.active.name}`}
                        image={this.props.active.image}
                        description={this.props.active.description
                            .replace(/<\s*h3[^>]>(.?)<\s*\/\s*h3>/g, '')
                            .replace(/<(?:.|\s)*?>/g, '')}
                    />
                )}

                {this.props.active && (
                    <Row key={this.props.active._id}>
                        <Col sm={12} md={5}>
                            <div className="subcat-info-img">
                                <img
                                    src={this.props.active.image}
                                    alt={
                                        !this.props.active.name
                                            ? ``
                                            : `Ellips - ${this.props.active.name}`
                                    }
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                        <Col sm={12} md={7}>
                            <div className="subcat-info-text mont-regular">
                                {ReactHtmlParser(this.props.active.description)}
                            </div>
                        </Col>
                    </Row>
                )}
            </div>
        )
    }
}

export default ProductSubcatDetail
