import React, { Component } from 'react'
import LocalizedLink from '../LocalizedLink'

import './three-articles.scss'

class ThreeArticles extends Component {
    constructor(props) {
        super()
    }

    render() {
        const threeArticlesMap = this.props.data.map((articles) => (
            <div className="three-articles-container" key={articles._id}>
                <LocalizedLink to={`/articles/${articles.slug}`}>
                    <div className="img-container">
                        <img
                            src={articles.image}
                            alt={`Ellips - ${articles.title}`}
                            className="img-fluid"
                        />
                    </div>
                    <div className="three-articles-text">
                        <div className="article-category">
                            <h4>{articles.category}</h4>
                        </div>
                        <div className="article-title">
                            <h3>{articles.title}</h3>
                        </div>
                    </div>
                </LocalizedLink>
            </div>
        ))
        return <div className="section-three-articles">{threeArticlesMap}</div>
    }
}

export default ThreeArticles
