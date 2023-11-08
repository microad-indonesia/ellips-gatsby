import React, { Component } from 'react'
import { Container, Row, Col, Form, NavLink } from 'react-bootstrap'

import './ecommerce.scss'

class Ecommerce extends Component {
    render() {
        return (
            <div className="ecommerce-section">
                <Container fluid>
                    <Row>
                        <Col className="d-flex align-items-center p-0">
                            <div className="col-wrapper">
                                <div className="section-title mont-medium">
                                    <h3>
                                        <span>Buy Ellips</span> Now
                                    </h3>
                                </div>
                                <Form>
                                    <Form.Group className="mb-1 mb-md-0 mr-md-2">
                                        <Form.Control
                                            as="select"
                                            className="custom-select text-center"
                                            id="inputCountry"
                                            value={this.props.activeRegion}
                                            onChange={
                                                this.props.handleChangeMarket
                                            }
                                        >
                                            {this.props.regions.map((reg) => {
                                                return (
                                                    <option
                                                        value={reg.code}
                                                        key={reg.code}
                                                    >
                                                        {reg.country}
                                                    </option>
                                                )
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="col-wrapper list-box">
                                <div className="ecommerce-list">
                                    <Row className="box-shop">
                                        {this.props.data.map((ecommerce) => {
                                            return (
                                                <Col className="mont-medium">
                                                    <NavLink
                                                        href={ecommerce.url}
                                                        target="_blank"
                                                        key={ecommerce._id}
                                                        rel="noreferrer"
                                                    >
                                                        {
                                                            ecommerce
                                                                .marketplace[0]
                                                                .name
                                                        }
                                                    </NavLink>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Ecommerce
