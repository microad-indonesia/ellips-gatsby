import React from 'react'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'

import './nav-sub-cat.scss'

export default function NavigationSubCategory(props) {
    return (
        <div>
            <div className="menu-subcat">
                <Navbar bg="none" expand="md" className="d-md-block d-none">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="navigation-box mont-regular">
                            {props.data.map((item) => {
                                if (item.slug === 'hair-mask-1') {
                                    return (
                                        <Nav.Link
                                            className={
                                                !props.active
                                                    ? ``
                                                    : props.active.slug ===
                                                      item.slug
                                                    ? `active`
                                                    : ``
                                            }
                                            key={item._id}
                                            onClick={() =>
                                                props.handleChangeSub(
                                                    item._id,
                                                    props.active
                                                )
                                            }
                                        >
                                            Vitamin Hair Mask
                                        </Nav.Link>
                                    )
                                } else if (item.slug === 'hair-mask-2') {
                                    return (
                                        <Nav.Link
                                            className={
                                                !props.active
                                                    ? ``
                                                    : props.active.slug ===
                                                      item.slug
                                                    ? `active`
                                                    : ``
                                            }
                                            key={item._id}
                                            onClick={() =>
                                                props.handleChangeSub(
                                                    item._id,
                                                    props.active
                                                )
                                            }
                                        >
                                            Pro Keratin Complex
                                        </Nav.Link>
                                    )
                                } else {
                                    return (
                                        <Nav.Link
                                            className={
                                                !props.active
                                                    ? ``
                                                    : props.active.slug ===
                                                      item.slug
                                                    ? `active`
                                                    : ``
                                            }
                                            key={item._id}
                                            onClick={() =>
                                                props.handleChangeSub(
                                                    item._id,
                                                    props.active
                                                )
                                            }
                                        >
                                            {item.name}
                                        </Nav.Link>
                                    )
                                }
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {props.active && (
                    <Dropdown className="d-md-none d-block">
                        <div>
                            <Dropdown.Toggle
                                id="dropdown-basic"
                                className="subcat-list btn-primary__fill-pink"
                            >
                                {props.active ? props.active.name : ''}

                                <Dropdown.Menu>
                                    {props.data.map((item) => {
                                        return (
                                            <Dropdown.Item
                                                onClick={() =>
                                                    props.handleChangeSub(
                                                        item._id,
                                                        props.active
                                                    )
                                                }
                                            >
                                                {item.name}
                                            </Dropdown.Item>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown.Toggle>
                        </div>
                    </Dropdown>
                )}
            </div>
        </div>
    )
}
