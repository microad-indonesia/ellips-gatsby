import React, { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import MetaTags from '../../components/MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import SearchBar from '../../components/SearchBar'
import LocalizedLink from '../../components/LocalizedLink'

import './search-result.scss'

export default function SearchResult({ location, pageContext: data }) {
    const [query, setQuery] = useState()
    const [products, setProducts] = useState([])
    const [articles, setArticles] = useState([])
    const [visibleProduct, setVisibleProduct] = useState(5)
    const [visibleArticle, setVisibleArticle] = useState(4)
    const { t } = useTranslation()
    const lang = data.lang

    useEffect(() => {
        let params = new URLSearchParams(location.search)
        setQuery(params.get('q'))
        axios
            .get(
                `${process.env.GATSBY_API_URL}/api/v1/search?q=${params.get(
                    'q'
                )}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'Accept-Language': lang,
                    },
                }
            )
            .then((res) => {
                const data = res.data
                setProducts(data.products)
                setArticles(data.articles)
                // console.log(data.products)
            })
    }, [])

    const memoizedLoadMoreProduct = useCallback(() => {
        setVisibleProduct((prevVisibleProduct) => prevVisibleProduct + 5)
    }, [])

    const memoizedLoadMoreArticle = useCallback(() => {
        setVisibleArticle((prevVisibleArticle) => prevVisibleArticle + 4)
    }, [])

    return (
        <div className="search-result-page">
            <MetaTags
                title={`Ellips | ${t('search.title')} `}
                description={t('search.metadesc')}
                image="https://ellipshaircare.id/assets/images/icons-and-logo/ellips-logo.svg"
                url={typeof window !== 'undefined' ? window.location.href : ''}
            />
            <Navigation activeLanguage={lang} />
            <div className="search-result-container">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="section-search-title">
                                <div className="page-title">
                                    <h1>{t('search.title')}</h1>
                                </div>
                                <div className="keyword">
                                    <h3>
                                        {t('search.for')} <span>{query}</span>
                                    </h3>
                                </div>
                                <SearchBar></SearchBar>
                            </div>
                        </Col>
                    </Row>
                    <Row className="px-4 border-bottom-pink">
                        <div className="section-results section-results__product">
                            <div className="section-title">
                                <h3>{t('search.product')}</h3>
                            </div>
                            <div className="product-display">
                                {products
                                    .slice(0, visibleProduct)
                                    .map((product) => {
                                        // console.log(visibleProduct)
                                        // console.log(product.slug)
                                        return (
                                            <div
                                                className="product-display-wrapper fade-in slideup slidedown"
                                                key={product._id}
                                            >
                                                <LocalizedLink
                                                    to={`${product.slug}`}
                                                >
                                                    <div className="product-display-img">
                                                        <img
                                                            src={product.image}
                                                            alt={`Ellips Haircare Products - ${product.name}`}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="product-name">
                                                        <h3>{product.name}</h3>
                                                    </div>
                                                </LocalizedLink>
                                            </div>
                                        )
                                    })}
                            </div>
                            {visibleProduct < products.length && (
                                <Button
                                    variant="primary"
                                    className="btn-outline-primary__outline-black load-more"
                                    onClick={memoizedLoadMoreProduct}
                                >
                                    {t('common.load')}
                                </Button>
                            )}
                        </div>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <div className="section-results section-results__article">
                            <div className="section-title">
                                <h3>{t('search.article')}</h3>
                            </div>
                            <div className="section-article-list">
                                {articles
                                    .slice(0, visibleArticle)
                                    .map((article) => {
                                        return (
                                            <Col md={3} sm={12}>
                                                <div
                                                    className="article-card fade-in slideup slidedown"
                                                    key={article._id}
                                                >
                                                    <LocalizedLink
                                                        to={`${article.slug}`}
                                                    >
                                                        <div className="img-container">
                                                            <img
                                                                src={
                                                                    article.image
                                                                }
                                                                alt={`Ellips - ${article.title}`}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="article-list-text">
                                                            <div className="article-category">
                                                                <h4>
                                                                    {
                                                                        article.category
                                                                    }
                                                                </h4>
                                                            </div>
                                                            <div className="article-title">
                                                                <h3>
                                                                    {
                                                                        article.title
                                                                    }
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </LocalizedLink>
                                                </div>
                                            </Col>
                                        )
                                    })}
                            </div>
                        </div>
                    </Row>

                    {visibleArticle < articles.length && (
                        <Button
                            variant="primary"
                            className="btn-outline-primary__outline-black load-more"
                            onClick={memoizedLoadMoreArticle}
                        >
                            {t('common.load')}
                        </Button>
                    )}
                </Container>
            </div>
            <Footer />
        </div>
    )
}
