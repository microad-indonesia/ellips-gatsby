import React from 'react'
import {  Row, Col } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

import './homepage-article.scss'

class HomepageArticle extends React.Component {
    render() {
        const { t, data: articleContent } = this.props

        const articleMap = articleContent.map((article) => (
            <Col
                sm={12}
                md={4}
                className="homepage-articles-content"
                key={article.id}
            >
                <div className="image-container mb-2 mb-md-4">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="img-fluid border-radius"
                    />
                    <div className="box-text">
                        <div className="homepage-article-title mont-bold">
                            <h4>{article.title}</h4>
                        </div>
                        <div className="d-flex justify-content-center box-info mont-medium">
                            <div className="homepage-article-date mont-medium">
                                <h6>{article.published_date}</h6>
                            </div>
                            {/* <div className="homepage-article-tag">
                                <h6>
                                    <span>{article.tags}</span>
                                </h6>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="homepage-article-shortdesc mont-medium">
                    <p>{article.short_content}...</p>
                </div>
                <LocalizedLink
                    to={`/articles/${article.slug}`}
                    className="btn read-more mont-regular"
                    target="_self"
                >
                    {t('home.article.button_more')}
                </LocalizedLink>
            </Col>
        ))

        return (
            <div>
                <section className="homepage-articles">
                    <Row className="m-0">
                        <Col sm={12} md={2} className="box-left">
                            <div className="title-section mont-medium d-block d-md-none">
                                <h3>
                                    <span>{t('home.article.title1')}</span>
                                    {t('home.article.title2')}
                                </h3>
                            </div>

                            <div className="title-section mont-medium d-none d-md-block">
                                <h3>
                                    <span>{t('home.article.title1')}</span>
                                    <br></br>
                                    {t('home.article.title2')}
                                </h3>
                            </div>
                        </Col>
                        <Col sm={12} md={10} className="box-right">
                            <Row className="m-0">{articleMap}</Row>
                        </Col>
                    </Row>
                    {/* <Slider
                        {...settings}
                        className="homepage-article-container"
                    >
                        {articleMap}
                    </Slider> */}
                    {/* <LocalizedLink
                        to="/articles"
                        className="btn btn-outline-primary btn-outline-primary__outline-pink see-all grow shrink"
                    >
                        {t('home.article.button_all')}
                    </LocalizedLink> */}
                </section>
            </div>
        )
    }
}

export default withTrans(HomepageArticle)
