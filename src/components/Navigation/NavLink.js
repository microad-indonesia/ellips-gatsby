/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'gatsby'

const linkStyles = {
    display: 'block',
    color: '#616569',
    opacity: '0.75',
    padding: '0.5rem 0',
    letterSpacing: '2px',
    borderBottom: '1px dashed #707070',
}

const activeStyles = {
    color: '#f34f96',
    fontWeight: 'bold',
    opacity: '1',
    borderBottom: '2px dashed #f34f96',
}

function NavLink({ children, ...props }) {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Link
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            style={linkStyles}
            activeStyle={activeStyles}
            // eslint-disable-next-line max-len
            getProps={({ isCurrent }) =>
                isCurrent ? { style: { ...linkStyles, ...activeStyles } } : null
            }
        >
            {children}
        </Link>
    )
}

export default NavLink
