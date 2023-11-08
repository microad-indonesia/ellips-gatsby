import React, { Component } from 'react'
import { Navbar, Button, Nav } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'
import { withTrans } from '../../i18n/withTrans'
import SearchBar from '../SearchBar'
import { supportedLanguages, languagePrefix } from '../../i18n'
import NavLink from './NavLink'
import { Slide } from 'react-reveal'
// import classnames from 'classnames'
// import useScrollListener from '../UseScrollListener'

import './navigation.scss'
import img_logo from '../../images/revamp/logo-ellips-new.png'
import svg_ig from '../../images/icons-and-logo/ellips-socmed-instagram.svg'
import svg_fb from '../../images/icons-and-logo/ellips-socmed-facebook.svg'
import svg_yt from '../../images/icons-and-logo/ellips-socmed-youtube.svg'

// Use a ternary operator to make sure that the document object is defined
const body = typeof document !== `undefined` ? document.body : null
const scrollUp = 'scroll-up'
const scrollDown = 'scroll-down'
let lastScroll = 0
class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            scrolled: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let a = window.scrollY > 0 ? true : false
            const currentScroll = window.pageYOffset

            this.setState({
                scrolled: a,
            })

            this.changeLanguage = this.changeLanguage.bind(this)

            if (currentScroll <= 0) {
                body.classList.remove(scrollUp)
                return
            }

            if (
                currentScroll > lastScroll &&
                !body.classList.contains(scrollDown)
            ) {
                body.classList.remove(scrollUp)
                body.classList.add(scrollDown)
            } else if (
                currentScroll < lastScroll &&
                body.classList.contains(scrollDown)
            ) {
                body.classList.remove(scrollDown)
                body.classList.add(scrollUp)
            }
            lastScroll = currentScroll
        })
    }

    changeLanguage = (lng) => {
        let path = window.location.pathname.split('/')
        path[1] = lng
        let newUrl = path.join('/')
        window.location.replace(newUrl)

        console.log(window.location.pathname)
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state.visible

        const currentScrollPos = window.pageYOffset
        const visible = prevScrollpos > currentScrollPos

        this.setState({
            prevScrollpos: currentScrollPos,
            visible,
        })
    }

    render() {
        const { t, activeLanguage } = this.props

        const langSwitcher = supportedLanguages.map((lang) => (
            <p
                className={lang === activeLanguage ? 'active' : ''}
                onClick={() => this.changeLanguage(lang)}
                onKeyUp={() => this.changeLanguage(lang)}
                role="presentation"
            >
                {languagePrefix[lang]}
            </p>
        ))

        return (
            <div className="main-menu">
                <Navbar
                    expand="true"
                    bg={
                        this.state.scrolled
                            ? 'color-white'
                            : 'color-transparent'
                    }
                >
                    <Navbar.Brand key="brand-home" href={`/${activeLanguage}/`}>
                        <div className="main-logo">
                            <img
                                src={img_logo}
                                alt="Logo Ellips New"
                                className="img-fluid"
                            />
                        </div>
                    </Navbar.Brand>
                    <Slide right>
                        <div className="lang-switcher d-none d-md-flex mont-bold">
                            {langSwitcher}
                        </div>
                    </Slide>
                    <Slide right>
                        <Button
                            className="navbar-toggler collapsed"
                            bsPrefix="btn-menu"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </Button>
                    </Slide>
                    <Navbar.Collapse key="collapse" id="navbarCollapse">
                        <Nav
                            defaultActiveKey="/home"
                            as="ul"
                            className="mr-auto mont-medium"
                        >
                            <Nav.Item key={`link-home`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/`}
                                    className="nav-link"
                                >
                                    {t('menu.home')}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item key={`link-hair-vitamin`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/hair-vitamin`}
                                    className="nav-link"
                                >
                                    {t('category.hair-vitamin')}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item key={`link-hair-mask`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/hair-mask`}
                                    className="nav-link"
                                >
                                    {t('category.hair-mask')}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item key={`link-dry-shampoo`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/dry-shampoo`}
                                    className="nav-link"
                                >
                                    {t('category.dry-shampoo')}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item key={`link-about-ellips`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/about-ellips`}
                                    className="nav-link"
                                >
                                    {t('menu.about')}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item key={`link-hairpedia`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/hairpedia`}
                                    className="nav-link"
                                >
                                    {t('menu.hairpedia')}
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item key={`link-contact-us`} as="li">
                                <NavLink
                                    to={`/${activeLanguage}/contact-us`}
                                    className="nav-link"
                                >
                                    {t('menu.contact')}
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                        <div className="socmed-nav">
                            <div className="socmed-icon instagram hvr-bob">
                                <a href="https://www.instagram.com/ellips_haircare">
                                    <ReactSVG src={svg_ig} />
                                </a>
                            </div>
                            <div className="socmed-icon facebook hvr-bob">
                                <a href="https://www.facebook.com/EllipsHaircare.Indonesia">
                                    <ReactSVG src={svg_fb} />
                                </a>
                            </div>
                            <div className="socmed-icon youtube hvr-bob">
                                <a href="https://www.youtube.com/channel/UCC1PY6BO_faZeby6xu_Zb_w">
                                    <ReactSVG src={svg_yt} />
                                </a>
                            </div>
                        </div>
                        <SearchBar></SearchBar>
                        <div className="lang-switcher d-flex d-md-none mt-4 mont-medium">
                            {langSwitcher}
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default withTrans(Navigation)
