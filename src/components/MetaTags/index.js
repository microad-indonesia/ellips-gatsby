import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const MetaTags = ({ title, description, image, url }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta itemprop="name" content={title} />
            <meta itemprop="description" content={description} />
            <meta itemprop="image" content={image} />
            <meta charset="utf-8" data-react-helmet="true" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#fd79ad" />
            <meta name="msapplication-TileColor" content="#fd79ad" />
            <meta name="msapplication-navbutton-color" content="#FFFFFF" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="#fd79ad"
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <link rel="canonical" href={url} />
        </Helmet>
    )
}

MetaTags.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default MetaTags
