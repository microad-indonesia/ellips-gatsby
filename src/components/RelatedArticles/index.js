import React, { Component } from 'react'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

import './related-articles.scss'

class RelatedArticles extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { t } = this.props
        const relatedArticleMap = this.props.data.map((articles) => (
            <div className="article-card slideup slidedown" key={articles._id}>
                <LocalizedLink to={`/articles/${articles.slug}`}>
                    <div className="img-container">
                        <img
                            src={articles.image}
                            alt={`Ellips - ${articles.title}`}
                            className="img-fluid"
                        />
                    </div>
                    <div className="article-list-text">
                        <div className="article-category">
                            <h4>{articles.category}</h4>
                        </div>
                        <div className="article-title">
                            <h3>{articles.title}</h3>
                        </div>
                        {/* <div className="article-date">
              <p>{articles.published_date}</p>
            </div> 
            <div className="clearfix"></div>*/}
                    </div>
                </LocalizedLink>
            </div>
        ))
        return (
            <div>
                <div className="section-title">
                    <h3>{t('article.related')}</h3>
                </div>
                <div className="related-container">{relatedArticleMap}</div>
            </div>
        )
    }
}

export default withTrans(RelatedArticles)
