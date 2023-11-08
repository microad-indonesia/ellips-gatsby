import React from 'react'
import { useTranslation } from 'react-i18next'
import MetaTags from '../components/MetaTags'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import LocalizedLink from '../components/LocalizedLink'

import '../styles/page-not-found.scss'
import img_404 from '../images/404.png'

const IndexPage = () => {
    const { t } = useTranslation()
    return (
        <div className="page-not-found">
            <MetaTags
                title="Ellips | 404"
                description={`${t('404.title')}`}
                image={img_404}
            />
            <Navigation />
            <div className="page-container">
                <div className="image-container">
                    <img
                        src={img_404}
                        alt={`Ellips - ${t('404.title')}`}
                        className="img-fluid"
                    />
                </div>

                <div className="page-text">
                    <h3>{`${t('404.title')}`}</h3>
                </div>

                <div className="button-container">
                    <LocalizedLink
                        to="/"
                        className="btn btn-outline-primary btn-outline-primary__outline-black back-button"
                    >
                        {`${t('404.button')}`}
                    </LocalizedLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IndexPage
