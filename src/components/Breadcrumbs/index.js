import React from 'react'
import LocalizedLink from '../LocalizedLink'

import './breadcrumbs.scss'

export default function Breadcrumbs(props) {
    // console.log('Breadcrumbs = ', props)
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-wrapper mont-medium">
                <LocalizedLink to="/">Home</LocalizedLink>
                {props.data.map((detail) => {
                    // console.log('Breadcrumbs = ', detail)
                    return (
                        <>
                            &nbsp;/{' '}
                            <LocalizedLink to={detail.slug ? detail.slug : ''}>
                                {detail.name}
                            </LocalizedLink>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
