import React, { Component } from 'react'
import { withTrans } from '../../i18n/withTrans'
import MetaTags from '../../components/MetaTags'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import VideoBanner from '../VideoBanner'
import VideoList from '../VideoList'

import './videos.scss'

import img_banner from '../../images/video-banner.png'

class Videos extends Component {
    render() {
        const { t } = this.props
        const { lang } = this.props.pageContext
        const { videoData: data } = this.props.pageContext

        return (
            <div className="video-page">
                <MetaTags
                    title="Ellips | Videos"
                    description={t('hairpedia.video.subtitle')}
                    image={img_banner}
                    url={
                        typeof window !== 'undefined'
                            ? window.location.href
                            : ''
                    }
                />
                <Navigation activeLanguage={lang} />
                <VideoBanner />
                <VideoList data={data} />
                <Footer />
            </div>
        )
    }
}

export default withTrans(Videos)
