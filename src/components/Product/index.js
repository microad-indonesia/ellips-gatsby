import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ProductDetailInfo from '../ProductDetailInfo'
import HowToUse from '../HowToUse'
import ProductReview from '../ProductReview'
import Ecommerce from '../Ecommerce'
import Recommendations from '../Recommendations'

import './product.scss'
class Product extends Component {
    constructor(props) {
        super()
        this.state = {
            activeMarkets: [],
            activeRegion: 'ID',
            data: props.pageContext.productData,
            lang: props.pageContext.lang,
        }
        this.handleErrors = this.handleErrors.bind(this)
        this.handleChangeMarket = this.handleChangeMarket.bind(this)

        // console.log('Product Detail Info = ', this.state.data)
    }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.message)
        }
        return response
    }

    handleChangeMarket(event) {
        const markets = this.state.data.marketplaces.filter(
            (market) => market.code === event.target.value
        )
        this.setState({
            activeMarkets: markets,
            activeRegion: event.target.value,
        })
    }

    componentDidMount() {
        const markets = this.state.data.marketplaces.filter(
            (market) => market.code === this.state.activeRegion
        )
        this.setState({
            activeMarkets: markets,
        })
    }

    render() {
        const lang = this.state.lang
        const parent_slug = this.state.data.product.category.parent
            ? this.state.data.product.category.parent.slug
            : this.state.data.product.category.slug
        const parent_name = this.state.data.product.category.parent
            ? this.state.data.product.category.parent.name
            : this.state.data.product.category.name
        const breadcrumbs = [
            {
                slug: `/${parent_slug}`,
                name: parent_name,
            },
            {
                slug: `/${parent_slug}/${this.state.data.product.slug}`,
                name: this.state.data.product.name,
            },
        ]
        // console.log('Product Detail = ', lang)
        // console.log('Product Detail = ', this.props.pageContext.lang)

        let regions = this.state.data.marketplaces
            .map((reg) => {
                return {
                    country: reg.country,
                    code: reg.code,
                }
            })
            .filter(
                (value, index, self) =>
                    index ===
                    self.findIndex(
                        (v) =>
                            v.code === value.code && v.country === value.country
                    )
            )
            .sort((a, b) => a.country.localeCompare(b.country))

        return (
            <div>
                <div className="product-detail-page">
                    <div className="product-detail-page-wrapper">
                        {this.state.data.product && (
                            <div>
                                <MetaTags
                                    title={`Ellips | ${this.state.data.product.name}`}
                                    image={this.state.data.product.image}
                                    description={this.state.data.product.details.description1
                                        .replace(
                                            /<\s*h3[^>]>(.?)<\s*\/\s*h3>/g,
                                            ''
                                        )
                                        .replace(/<(?:.|\s)*?>/g, '')}
                                    url={
                                        typeof window !== 'undefined'
                                            ? window.location.href
                                            : ''
                                    }
                                />
                                <Navigation activeLanguage={lang} />
                                <ProductDetailInfo
                                    activeLanguage={lang}
                                    data={this.state.data.product}
                                    breadcrumbs={breadcrumbs}
                                />
                                <HowToUse data={this.state.data.product} />
                                <Row className="pb-5 m-0">
                                    <Col
                                        sm={12}
                                        lg={5}
                                        className="box-commerce"
                                    >
                                        {this.state.data.marketplaces &&
                                            this.state.data.marketplaces
                                                .length > 0 && (
                                                <Ecommerce
                                                    data={
                                                        this.state.activeMarkets
                                                    }
                                                    regions={regions}
                                                    activeRegion={
                                                        this.state.activeRegion
                                                    }
                                                    handleChangeMarket={
                                                        this.handleChangeMarket
                                                    }
                                                />
                                            )}
                                    </Col>
                                    <Col
                                        sm={12}
                                        lg={7}
                                        className="box-testimonial"
                                    >
                                        {this.state.data.product.details &&
                                            this.state.data.product.details
                                                .reviews &&
                                            this.state.data.product.details
                                                .reviews.length > 0 && (
                                                <ProductReview
                                                    data={
                                                        this.state.data.product
                                                            .details.reviews
                                                    }
                                                />
                                            )}
                                    </Col>
                                </Row>
                                {this.state.data.relatedProducts && (
                                    <Recommendations
                                        product={this.state.data.product}
                                        activeLanguage={lang}
                                        data={this.state.data.relatedProducts}
                                        breadcrumbs={breadcrumbs}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <Footer activeLanguage={lang} />
            </div>
        )
    }
}
export default Product
