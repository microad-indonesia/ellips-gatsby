import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

class VariantDryShampoo extends Component {
    render() {
        const { t } = this.props
        const TitleAttribute = () => {
            return (
                <div className="title-vitamins mont-medium">
                    <h3>CHOOSE YOUR DRY SHAMPOO</h3>
                </div>
            )
        }

        const CategoryAttribute = () => {
            return (
                <Col className="p-0">
                    <div className="box-title-attribute dry-shampoo">
                        <div className="attribute-item one mont-bold">
                            <h4 className="mont-bold text-uppercase">
                                {t('category.attribute.attribute4')}
                            </h4>
                        </div>
                        <div className="attribute-item two mont-bold">
                            <h4 className="mont-bold text-uppercase">
                                {t('category.attribute.attribute2')}
                            </h4>
                        </div>
                        <div className="attribute-item three mont-bold">
                            <h4 className="mont-bold text-uppercase">
                                {t('category.attribute.attribute5')}
                            </h4>
                        </div>
                    </div>
                </Col>
            )
        }

        const categoryProductsMap = this.props.data.map((catProducts) => {
            const ItemTableAttribute = () => {
                return (
                    <LocalizedLink
                        to={`/${this.props.parent}/${catProducts.slug}`}
                    >
                        <div className="table-attribute grow shrink">
                            <div className="product-name mont-medium">
                                <h3>{catProducts.name}</h3>
                            </div>
                            {catProducts.attributes &&
                                catProducts.attributes.map(
                                    ({ attribute, value }) => {
                                        return (
                                            <div
                                                className="attribute mont-regular"
                                                key={(attribute.id)}
                                            >
                                                <div className="value-attribute">
                                                    {value}
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            <LocalizedLink
                                to={`/${this.props.parent}/${catProducts.slug}`}
                                className="btn btn-outline-primary btn-outline-primary__outline-black see-detail"
                            >
                                {t('common.button')}
                            </LocalizedLink>
                        </div>
                    </LocalizedLink>
                )
            }

            return (
                <div
                    className="product-display-wrapper mont-regular"
                    key={catProducts.id}
                >
                    <div className="product-display-img">
                        <img
                            src={catProducts.image_thumbnail}
                            alt={`Ellips Haircare Products - ${catProducts.name}`}
                            className="img-fluid"
                        />
                    </div>
                    <ItemTableAttribute />
                </div>
            )
        })

        return (
            <div className="variant-product">
                <TitleAttribute />
                <Row>
                    <CategoryAttribute />
                    <Col md={11} className="p-0">
                        <div className="product-display table-four">
                            {categoryProductsMap}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withTrans(VariantDryShampoo)
