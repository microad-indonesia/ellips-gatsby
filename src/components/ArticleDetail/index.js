import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'

import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import RelatedArticles from '../RelatedArticles'
import Breadcrumbs from '../Breadcrumbs'

import './article-detail.scss'

export default function ArticleDetail({ pageContext: data }) {
    // const lang = data.lang;
    const { lang } = data
    const { article: item, relatedArticles: related } = data.detail

    // console.log("Article Detail 1 =", data);
    // console.log('Article Detail 2 =', lang)

    return (
        <div className="article-detail-page">
            <MetaTags
                title={`${item.title} | Ellips Indonesia `}
                description={item.meta_desc}
                image={item.image}
            />
            <Breadcrumbs
                data={[
                    { slug: '/articles', name: 'Articles' },
                    { slug: '/articles/' + item.slug, name: 'Article Detail' },
                ]}
            />
            <Navigation activeLanguage={lang} />
            <div className="article-detail-section">
                <Container>
                    <Row>
                        <Col key={item._id}>
                            <div className="article-title">
                                <h1>{item.title}</h1>
                            </div>
                            <div className="clearfix"></div>
                            <div className="article-banner">
                                <img
                                    src={item.image}
                                    alt={
                                        !item.title
                                            ? ``
                                            : `Ellips - ${item.title}`
                                    }
                                    className="img-fluid d-none d-md-block"
                                />
                                <img
                                    src={item.image_mobile}
                                    alt={
                                        !item.title
                                            ? ``
                                            : `Ellips - ${item.title}`
                                    }
                                    className="img-fluid d-block d-md-none"
                                />
                            </div>
                            <div className="article-content">
                                {ReactHtmlParser(item.content)}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="related-section">
                <Container>
                    <Row>
                        <Col>
                            <RelatedArticles data={related}></RelatedArticles>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
