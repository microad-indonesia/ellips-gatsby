import React from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const Layout = ({ children }) => {
    // let AOS
    // useEffect(() => {
    //     const AOS = require('aos')
    //     AOS.init({
    //         once: false,
    //         offset: 50,
    //         delay: 50,
    //     })
    // }, [])

    // useEffect(() => {
    //     if (AOS) {
    //         AOS.refresh()
    //     }
    // })

    // useEffect(() => {
    //     AOS.init()
    // })

    return (
        <>
            {/* <Navigation /> */}
            <div>
                <main>{children}</main>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Layout
