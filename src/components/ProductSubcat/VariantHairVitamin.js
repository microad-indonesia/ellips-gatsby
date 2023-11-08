import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

class VariantHairVitamin extends Component {
    render() {
        const { t } = this.props
        const parentCategory = this.props.active.name
        const TitleAttribute = () => {
            return (
                <div className="title-vitamins mont-medium">
                    <h3>CHOOSE YOUR HAIR VITAMIN</h3>
                </div>
            )
        }

        const CategoryAttribute = () => {
            if (parentCategory === 'Moroccan Oil') {
                return (
                    <Col className="p-0">
                        <div className="box-title-attribute">
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
            } else if (parentCategory === 'PRO KERATIN COMPLEX') {
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
            } else if (parentCategory === 'BALINESE ESSENTIAL OIL') {
                return (
                    <Col className="p-0">
                        <div className="box-title-attribute balinese">
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
            const CapsuleImage = () => {
                if (
                    parentCategory === 'Moroccan Oil' ||
                    parentCategory === 'BALINESE ESSENTIAL OIL' ||
                    parentCategory === 'PRO KERATIN COMPLEX'
                ) {
                    return (
                        <div className="capsule-img">
                            <img
                                src={catProducts.image_suggestion}
                                alt={`Ellips Haircare Products - ${catProducts.name}`}
                                className="img-fluid"
                            />
                        </div>
                    )
                } else {
                    return <div></div>
                }
            }

            const ItemTableAttribute = () => {
                if (
                    parentCategory === 'Moroccan Oil' ||
                    parentCategory === 'BALINESE ESSENTIAL OIL' ||
                    parentCategory === 'PRO KERATIN COMPLEX'
                ) {
                    return (
                        <LocalizedLink
                            to={`/${this.props.parent}/${catProducts.slug}`}
                        >
                            <div className="table-attribute grow shrink">
                                <CapsuleImage />
                                <div className="product-name mont-medium">
                                    <h3>{catProducts.name}</h3>
                                </div>
                                {catProducts.attributes &&
                                    catProducts.attributes.map(
                                        ({ attribute, value }) => {
                                            return (
                                                <div
                                                    className="attribute mont-regular"
                                                    key={attribute.id}
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

        if (parentCategory === 'Moroccan Oil') {
            return (
                <div className="variant-product">
                    <TitleAttribute />
                    <Row>
                        <CategoryAttribute />
                        <Col md={11} className="p-0">
                            <div className="product-display table-five">
                                {categoryProductsMap}
                            </div>
                        </Col>
                    </Row>
                </div>
            )
        } else if (parentCategory === 'PRO KERATIN COMPLEX') {
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
        } else if (parentCategory === 'BALINESE ESSENTIAL OIL') {
            return (
                <div className="variant-product">
                    <TitleAttribute />
                    <Row>
                        <CategoryAttribute />
                        <Col md={11} className="p-0">
                            <div className="product-display table-two">
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

export default withTrans(VariantHairVitamin)
