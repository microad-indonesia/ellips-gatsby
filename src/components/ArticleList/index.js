import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import LocalizedLink from '../LocalizedLink'

import './article-list.scss'

export default function ArticleList(props) {
    const { t } = useTranslation()
    return (
        <>
            <div className="section-article-list">
                <Container fluid>
                    <Row>
                        {props.data.slice(0, props.visible).map((item) => {
                            return (
                                <Col md={3} sm={12}>
                                    <div
                                        className="article-card fade-in slideup slidedown"
                                        key={item._id}
                                    >
                                        <LocalizedLink
                                            to={`/articles/${item.slug}`}
                                        >
                                            <div className="img-container">
                                                <img
                                                    src={item.image}
                                                    alt={`Ellips - ${item.title}`}
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="article-list-text">
                                                <div className="article-category">
                                                    <h4>{item.category}</h4>
                                                </div>
                                                <div className="article-title">
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </LocalizedLink>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
            {props.visible < props.data.length && (
                <Button
                    variant="primary"
                    className="btn-outline-primary__outline-black load-more"
                    onClick={props.onLoadMore}
                >
                    {t('common.load')}
                </Button>
            )}
        </>
    )
}
