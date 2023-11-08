import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

class VariantHairMask extends Component {
    render() {
        const { t } = this.props
        const parentCategory = this.props.active.name
        const TitleAttribute = () => {
            return (
                <div className="title-vitamins mont-medium">
                    <h3>CHOOSE YOUR HAIR MASK</h3>
                </div>
            )
        }

        const CategoryAttribute = () => {
            if (parentCategory === 'Hair Mask Moroccan') {
                return (
                    <Col className="p-0">
                        <div className="box-title-attribute moroccan">
                            <div className="attribute-item one mont-bold">
                                <h4 className="mont-bold text-uppercase">
                                    {t('category.attribute.attribute1')}
                                </h4>
                            </div>
                            <div className="attribute-item two mont-bold">
                                <h4 className="mont-bold text-uppercase">
                                    {t('category.attribute.attribute2')}
                                </h4>
                            </div>
                            <div className="attribute-item three mont-bold">
                                <h4 className="mont-bold text-uppercase">
                                    {t('category.attribute.attribute3')}
                                </h4>
                            </div>
                        </div>
                    </Col>
                )
            } else if (parentCategory === 'Hair Mask Pro Keratin Complex') {
                return (
                    <Col className="p-0">
                        <div className="box-title-attribute pro-keratin">
                            <div className="attribute-item one">
                                <h4 className="mont-bold text-uppercase">
                                    {t('category.attribute.attribute1')}
                                </h4>
                            </div>
                            <div className="attribute-item two mont-bold">
                                <h4 className="mont-bold text-uppercase">
                                    {t('category.attribute.attribute2')}
                                </h4>
                            </div>
                            <div className="attribute-item three mont-bold">
                                <h4 className="mont-bold text-uppercase">
                                    {t('category.attribute.attribute3')}
                                </h4>
                            </div>
                        </div>
                    </Col>
                )
            } else {
                return <div></div>
            }
        }

        const categoryProductsMap = this.props.data.map((catProducts) => {
            const ItemTableAttribute = () => {
                if (
                    parentCategory === 'Hair Mask Moroccan' ||
                    parentCategory === 'Hair Mask Pro Keratin Complex'
                ) {
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
                } else {
                    return (
                        <div>
                            <div className="product-name mont-medium">
                                <h3>{catProducts.name}</h3>
                            </div>
                            <LocalizedLink
                                to={`/${this.props.parent}/${catProducts.slug}`}
                                className="btn btn-outline-primary btn-outline-primary__outline-black see-detail grow shrink"
                            >
                                {t('common.button')}
                            </LocalizedLink>
                        </div>
                    )
                }
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

        if (parentCategory === 'Hair Mask Moroccan') {
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
        } else if (parentCategory === 'Hair Mask Pro Keratin Complex') {
            return (
                <div className="variant-product">
                    <TitleAttribute />
                    <Row>
                        <CategoryAttribute />
                        <Col md={11} className="p-0">
                            <div className="product-display table-three">
                                {categoryProductsMap}
                            </div>
                        </Col>
                    </Row>
                </div>
            )
        } else {
            return (
                <div className="variant-product">
                    <TitleAttribute />
                    <Row>
                        <Col>
                            <div className="product-display">
                                {categoryProductsMap}
                            </div>
                        </Col>
                    </Row>
                </div>
            )
        }
    }
}

export default withTrans(VariantHairMask)
