import React, { Component } from 'react'
import i18Next from 'i18next'

class LocalizedLink extends Component {
    render() {
        const { to, className, target = '_self', style, children } = this.props
        const lang = i18Next.language
        // const lang2 = localStorage.getItem("lang") || "en";

        // console.log('Local Link 1 = ', lang)
        // console.log("Local Link 2 = ", lang2);

        return (
            <a
                className={className}
                href={`/${lang}${to}`}
                target={target}
                style={style}
            >
                {children}
            </a>
        )
    }
}

export default LocalizedLink
