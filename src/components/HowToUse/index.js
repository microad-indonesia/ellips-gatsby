import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'

import './how-to-use.scss'

class HowToUse extends Component {
    render() {
        return (
            <div className="how-to-use-section">
                <Container fluid>
                    <Row>
                        <Col
                            sm={12}
                            lg={{ span: 6, order: 1 }}
                            className="order-2"
                        >
                            <div className="video-container">
                                <iframe
                                    title="How to use"
                                    src={this.props.data.video_url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                        <Col
                            sm={12}
                            lg={{ span: 6, order: 2 }}
                            className="order-1"
                        >
                            <div className="steps-container">
                                <div className="steps-content mont-regular">
                                    {ReactHtmlParser(
                                        this.props.data.details.description2
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HowToUse
