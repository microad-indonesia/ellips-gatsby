import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../Breadcrumbs'
import NavigationSubCategory from '../NavigationSubCategory'
import ProductSubcatDetail from '../ProductSubcatDetail'
import VariantHairVitamin from './VariantHairVitamin'
import VariantHairMask from './VariantHairMask'
import VariantDryShampoo from './VariantDryShampoo'
import './product-subcat-page.scss'

export default function ProductSubcatPage({ pageContext: data }) {
    const [active, setActive] = useState()
    const { lang, categoryData: item, activeSub } = data
    const breadcrumbs = [
        {
            slug: `/${item.slug}`,
            name: item.name,
        },
    ]

    useEffect(() => {
        setActive(activeSub)
    }, [activeSub])

    const handleChangeSub = (id, isActive) => {
        const activated = item.children.filter((sub) => sub._id === id)
        if (isActive) {
            setActive(activated[0])
        }
    }

    // console.log('Item Vitamin =', item.children)

    if (item.slug === 'dry-shampoo') {
        return (
            <div className="product-category-page shampoo">
                <Navigation activeLanguage={lang} />
                {breadcrumbs && <Breadcrumbs data={breadcrumbs}></Breadcrumbs>}
                <div className="product-category-page-wrapper">
                    <div className="section--category-title">
                        <Row>
                            <Col>
                                <div className="category-title">
                                    <h1>{item.name}</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section--subcategory">
                        <Row>
                            <Col>
                                <ProductSubcatDetail
                                    active={active ? active : item}
                                ></ProductSubcatDetail>

                                <VariantDryShampoo
                                    active={active ? active : item}
                                    data={
                                        active
                                            ? active.products
                                            : item.products
                                            ? item.products
                                            : []
                                    }
                                    parent={item.slug}
                                />
                            </Col>
                        </Row>
                        <Row></Row>
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else if (item.slug === 'hair-vitamin') {
        return (
            <div className="product-category-page">
                <Navigation activeLanguage={lang} />
                {breadcrumbs && <Breadcrumbs data={breadcrumbs}></Breadcrumbs>}
                <div className="product-category-page-wrapper">
                    <div className="section--category-title">
                        <Row>
                            <Col>
                                <div className="category-title mont-medium">
                                    <h1>{item.name}</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section--subcategory">
                        <Row>
                            <Col>
                                <NavigationSubCategory
                                    data={item.children ? item.children : []}
                                    active={active}
                                    handleChangeSub={handleChangeSub}
                                />

                                <ProductSubcatDetail
                                    active={active ? active : item}
                                ></ProductSubcatDetail>
                                <VariantHairVitamin
                                    active={active ? active : item}
                                    data={
                                        active
                                            ? active.products
                                            : item.products
                                            ? item.products
                                            : []
                                    }
                                    parent={item.slug}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <div className="product-category-page hair-mask">
                <Navigation activeLanguage={lang} />
                {breadcrumbs && <Breadcrumbs data={breadcrumbs}></Breadcrumbs>}
                <div className="product-category-page-wrapper">
                    <div className="section--category-title">
                        <Row>
                            <Col>
                                <div className="category-title mont-medium">
                                    <h1>{item.name}</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="section--subcategory">
                        <Row>
                            <Col>
                                <NavigationSubCategory
                                    data={item.children ? item.children : []}
                                    active={active}
                                    handleChangeSub={handleChangeSub}
                                />

                                <ProductSubcatDetail
                                    active={active ? active : item}
                                ></ProductSubcatDetail>
                                <VariantHairMask
                                    active={active ? active : item}
                                    data={
                                        active
                                            ? active.products
                                            : item.products
                                            ? item.products
                                            : []
                                    }
                                    parent={item.slug}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
