import React, { Component } from 'react'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'

import './article-banner.scss'

class ArticleBanner extends Component {
    render() {
        const { t } = this.props
        return (
            <div className="section-article-banner">
                <div
                    className="banner-container radius-bottom-right"
                    key={this.props.data._id}
                >
                    <div className="img-container">
                        <img
                            src={this.props.data.image}
                            alt={
                                !this.props.data.title
                                    ? ``
                                    : `Ellips Haircare - ${this.props.data.title}`
                            }
                            className="img-fluid radius-bottom-right d-none d-md-block"
                        />
                        <img
                            src={this.props.data.image_mobile}
                            alt={
                                !this.props.data.title
                                    ? ``
                                    : `Ellips Haircare - ${this.props.data.title}`
                            }
                            className="img-fluid radius-bottom-right d-block d-md-none"
                        />
                    </div>
                    <div className="banner-text">
                        <div className="article-category">
                            <h4>{this.props.data.category}</h4>
                        </div>
                        <div className="article-title">
                            <h3>{this.props.data.title}</h3>
                        </div>
                        <LocalizedLink
                            to={`/articles/${this.props.data.slug}`}
                            className="btn btn-primary__fill-black read-more grow shrink"
                        >
                            {t('home.article.button_more')}
                        </LocalizedLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTrans(ArticleBanner)
