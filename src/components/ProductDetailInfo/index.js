import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import Breadcrumbs from '../Breadcrumbs'
import ReviewRate from '../ProductReviewRate'
import ProductVariantDisplay from '../ProductVariantDisplay'

import './product-detail-info.scss'

class ProductDetailInfo extends Component {
    render() {
        if (this.props.data) {
            return (
                <div>
                    <div className="product-detail-info">
                        <Container fluid>
                            <Row className="m-0">
                                <Col sm={12} lg={6} className="p-0">
                                    <div className="product-detail-banner-img d-none d-lg-block">
                                        <img
                                            src={this.props.data.image}
                                            alt={
                                                !this.props.data.category.name
                                                    ? ``
                                                    : `Ellip Haircare Products - ${this.props.data.category.name}`
                                            }
                                            className="img-fluid"
                                        />
                                    </div>
                                </Col>
                                <Col sm={12} lg={6} className="p-0">
                                    <Breadcrumbs
                                        data={this.props.breadcrumbs}
                                    ></Breadcrumbs>
                                    <div className="product-detail-container">
                                        <div className="subcat-title tracking-in-expand mont-medium">
                                            <h1>
                                                {this.props.data.category.name}
                                            </h1>
                                        </div>
                                        <ProductVariantDisplay
                                            data={
                                                this.props.data.category
                                                    .products
                                            }
                                            parent={
                                                this.props.breadcrumbs[0].slug
                                            }
                                            active={this.props.data._id}
                                        />
                                        <div className="product-detail-banner-img d-block d-lg-none">
                                            <img
                                                src={this.props.data.image}
                                                alt={
                                                    !this.props.data.category
                                                        .name
                                                        ? ``
                                                        : `Ellip Haircare Products - ${this.props.data.category.name}`
                                                }
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="variant-name mont-medium">
                                            <h3>{this.props.data.name}</h3>
                                        </div>
                                        <div className="review-numbers mont-medium">
                                            <ReviewRate
                                                data={
                                                    this.props.data.details
                                                        .reviews
                                                }
                                            ></ReviewRate>
                                            <p>
                                                {
                                                    this.props.data.details
                                                        .reviews.length
                                                }{' '}
                                                Reviews
                                            </p>
                                        </div>
                                        <div className="variant-desc-detail mont-regular">
                                            {ReactHtmlParser(
                                                this.props.data.details
                                                    .description1
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
}

export default ProductDetailInfo
