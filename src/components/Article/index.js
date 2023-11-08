import React, { Component } from 'react'
import { withTrans } from '../../i18n/withTrans'
import MetaTags from '../MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ArticleBanner from '../ArticleBanner'
import ThreeArticles from '../ThreeArticles'
import ArticleList from '../ArticleList'

import './article.scss'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            topArticle: {},
            featuredArticles: [],
            articles: [],
            visible: 4,
        }
        this.onLoadMore = this.onLoadMore.bind(this)
    }

    onLoadMore() {
        this.setState((prevState) => {
            return {
                visible: prevState.visible + 4,
            }
        })
    }
    render() {
        const { t } = this.props
        const { articleData: data, lang } = this.props.pageContext
        const {
            top_article: topArticle,
            featured_articles: featuredArticles,
            articles,
        } = data
        return (
            <div className="articles-page">
                <MetaTags
                    title="Ellips | Articles"
                    description={t('hairpedia.article.subtitle')}
                    image={topArticle.image}
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Navigation activeLanguage={lang} />
                <div className="articles-page-wrapper">
                    <ArticleBanner data={topArticle}></ArticleBanner>
                    <ThreeArticles data={featuredArticles}></ThreeArticles>
                    <ArticleList
                        data={articles}
                        visible={this.state.visible}
                        onLoadMore={this.onLoadMore}
                    ></ArticleList>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withTrans(Article)
