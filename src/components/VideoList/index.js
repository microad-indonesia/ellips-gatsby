import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './video-list.scss'

export default class VideoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: 4,
            error: false,
        }

        this.loadMore = this.loadMore.bind(this)
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 2 }
        })
    }

    render() {
        const { data } = this.props
        return (
            <div className="section-list">
                <Container>
                    <Row>
                        <div className="section-video-list">
                            {data
                                .slice(0, this.state.visible)
                                .map((item, index) => {
                                    return (
                                        <Col sm={12} md={6} key={item._id}>
                                            <div className="video-content fade-in">
                                                <div className="video-container">
                                                    <iframe
                                                        title={item._id}
                                                        src={item.url}
                                                        frameBorder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                    ></iframe>
                                                </div>
                                                <div className="video-category">
                                                    <p>{item.subcategory}</p>
                                                </div>
                                                <div className="video-title">
                                                    <h4>{item.title}</h4>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}
                        </div>
                    </Row>
                    <Row>
                        {this.state.visible < data.length && (
                            <Button
                                variant="primary"
                                className="btn-outline-primary__outline-black load-more"
                                onClick={this.loadMore}
                            >
                                Load More
                            </Button>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}
