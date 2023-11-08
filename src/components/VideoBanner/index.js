import React, { Component } from 'react'
import { withTrans } from '../../i18n/withTrans'

import './video-banner.scss'
import img_banner from '../../images/video-banner.png'

class VideoBanner extends Component {
    render() {
        const { t } = this.props
        return (
            <div className="section-banner">
                <div className="banner-container">
                    <img
                        src={img_banner}
                        alt={`Ellips - ${t('hairpedia.video.subtitle')}`}
                        className="img-fluid radius-bottom-right d-none d-md-block"
                    />
                    <img
                        src="../assets/images/video-banner-m.png"
                        alt={`Ellips - ${t('hairpedia.video.subtitle')}`}
                        className="img-fluid radius-bottom-right d-block d-md-none"
                    />
                    <div className="page-title text-focus-in">
                        <h1>
                            Find the little secret to always make healthy hair
                            look good
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTrans(VideoBanner)
