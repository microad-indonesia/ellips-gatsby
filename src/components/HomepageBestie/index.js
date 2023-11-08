import React, { Component } from 'react'
import { Container, Row, Col, Nav, Tab, Card, CardGroup } from 'react-bootstrap'
import { withTrans } from '../../i18n/withTrans'
import { Slide } from 'react-reveal'

import './homeBestie.scss'
import BestieMeet from '../../images/revamp/bestie-1.webp'
import BestieDry from '../../images/revamp/bestie-2.webp'
import BestieColored from '../../images/revamp/bestie-3.webp'
import BestieFragile from '../../images/revamp/bestie-4.webp'
import vitaminTreatment from '../../images/revamp/product/blister-hair-treatment.webp'
import maskTreatment from '../../images/revamp/product/hm-treatment.png'
import vitaminNutriColor from '../../images/revamp/product/blister-nutri-color.webp'
import maskNutriColor from '../../images/revamp/product/hm-nutri-color.png'
import vitaminVitality from '../../images/revamp/product/blister-hair-vitality.webp'
import maskVolume from '../../images/revamp/product/hm-volume-miracle.png'

import SwiperMobile from './SwiperMobile'

class HomepageBestie extends Component {
    constructor() {
        super()
        this.state = {
            dropDownValue: 'Meet Your Hair Bestie',
        }
    }

    changeValue(text) {
        this.setState({ dropDownValue: text })
    }

    render() {
        const { t } = this.props
        const ContentDry = (props) => {
            return (
                <Row
                    className="m-0"
                    id={`content${props.id}`}
                    style={{ display: 'none' }}
                >
                    <Col sm={6} className="box-left">
                        <div className="title-bestie mont-medium">
                            <Slide left>
                                <h3>{t('home.bestie.category1')}</h3>
                            </Slide>
                        </div>
                        <div className="desc-bestie mont-regular">
                            <Slide left>
                                <p className="text">
                                    {t('home.bestie.content.description1')}
                                </p>
                            </Slide>
                        </div>
                    </Col>
                    <Col sm={6} className="box-right">
                        <Slide right>
                            <div className="title-recommendation mont-bold">
                                {t('home.bestie.recommendation.title')}
                            </div>
                        </Slide>
                        <Slide right>
                            <CardGroup>
                                <Card className="grow shrink">
                                    <Card.Img
                                        variant="top"
                                        src={vitaminTreatment}
                                        className="img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mont-bold">
                                            Ellips Hair Vitamin Hair Treatment
                                        </Card.Title>
                                        <Card.Link
                                            className="mont-regular"
                                            href={t(
                                                'home.bestie.product1.link1'
                                            )}
                                        >
                                            {t(
                                                'home.bestie.recommendation.button'
                                            )}
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card className="grow shrink">
                                    <Card.Img
                                        variant="top"
                                        src={maskTreatment}
                                        className="img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mont-bold">
                                            Ellips Hair Mask Hair Treatment
                                        </Card.Title>
                                        <Card.Link
                                            className="mont-regular"
                                            href={t(
                                                'home.bestie.product1.link2'
                                            )}
                                        >
                                            {t(
                                                'home.bestie.recommendation.button'
                                            )}
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Slide>
                    </Col>
                </Row>
            )
        }

        const ContentColor = (props) => {
            return (
                <Row
                    className="m-0"
                    id={`content${props.id}`}
                    style={{ display: 'none' }}
                >
                    <Col sm={6} className="box-left">
                        <div className="title-bestie mont-medium">
                            <Slide left>
                                <h3>{t('home.bestie.category2')}</h3>
                            </Slide>
                        </div>
                        <div className="desc-bestie mont-regular">
                            <Slide left>
                                <p className="text">
                                    {t('home.bestie.content.description2')}
                                </p>
                            </Slide>
                        </div>
                    </Col>
                    <Col sm={6} className="box-right">
                        <Slide right>
                            <div className="title-recommendation mont-bold">
                                {t('home.bestie.recommendation.title')}
                            </div>
                        </Slide>
                        <Slide right>
                            <CardGroup>
                                <Card className="grow shrink">
                                    <Card.Img
                                        variant="top"
                                        src={vitaminNutriColor}
                                        className="img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mont-bold">
                                            Ellips Hair Vitamin Nutri Color
                                        </Card.Title>
                                        <Card.Link
                                            className="mont-regular"
                                            href={t(
                                                'home.bestie.product2.link1'
                                            )}
                                        >
                                            {t(
                                                'home.bestie.recommendation.button'
                                            )}
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card className="grow shrink">
                                    <Card.Img
                                        variant="top"
                                        src={maskNutriColor}
                                        className="img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mont-bold">
                                            Ellips Hair Mask Nutri Color
                                        </Card.Title>
                                        <Card.Link
                                            className="mont-regular"
                                            href={t(
                                                'home.bestie.product2.link2'
                                            )}
                                        >
                                            {t(
                                                'home.bestie.recommendation.button'
                                            )}
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Slide>
                    </Col>
                </Row>
            )
        }

        const ContentFragile = (props) => {
            return (
                <Row
                    className="m-0"
                    id={`content${props.id}`}
                    style={{ display: 'none' }}
                >
                    <Col sm={6} className="box-left">
                        <div className="title-bestie mont-medium">
                            <Slide left>
                                <h3>{t('home.bestie.category3')}</h3>
                            </Slide>
                        </div>
                        <div className="desc-bestie mont-regular">
                            <Slide left>
                                <p className="text">
                                    {t('home.bestie.content.description3')}
                                </p>
                            </Slide>
                        </div>
                    </Col>
                    <Col sm={6} className="box-right">
                        <Slide right>
                            <div className="title-recommendation mont-bold">
                                {t('home.bestie.recommendation.title')}
                            </div>
                        </Slide>
                        <Slide right>
                            <CardGroup>
                                <Card className="grow shrink">
                                    <Card.Img
                                        variant="top"
                                        src={vitaminVitality}
                                        className="img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mont-bold">
                                            Ellips Hair Vitamin Hair Vitality
                                        </Card.Title>
                                        <Card.Link
                                            className="mont-regular"
                                            href={t(
                                                'home.bestie.product3.link1'
                                            )}
                                        >
                                            {t(
                                                'home.bestie.recommendation.button'
                                            )}
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                                <Card className="grow shrink">
                                    <Card.Img
                                        variant="top"
                                        src={maskVolume}
                                        className="img-fluid"
                                    />
                                    <Card.Body>
                                        <Card.Title className="mont-bold">
                                            Ellips Hair Mask Volume Miracle
                                        </Card.Title>
                                        <Card.Link
                                            className="mont-regular"
                                            href={t(
                                                'home.bestie.product3.link2'
                                            )}
                                        >
                                            {t(
                                                'home.bestie.recommendation.button'
                                            )}
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Slide>
                    </Col>
                </Row>
            )
        }

        const onContentClick = (value) => {
            const element = document.getElementById(`content${value}`)
            const element1 = document.getElementById('content1')
            const element2 = document.getElementById('content2')
            const element3 = document.getElementById('content3')

            if (element === element1) {
                element2.style.display = 'none'
                element3.style.display = 'none'
                element1.style.display = 'flex'
                element1.scrollIntoView({ behavior: 'smooth' })
            } else if (element === element2) {
                element1.style.display = 'none'
                element3.style.display = 'none'
                element2.style.display = 'flex'
                element2.scrollIntoView({ behavior: 'smooth' })
            } else if (element === element3) {
                element1.style.display = 'none'
                element2.style.display = 'none'
                element3.style.display = 'flex'
                element3.scrollIntoView({ behavior: 'smooth' })
            } else {
                element.style.display = 'flex'
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }

        return (
            <div>
                <Container fluid className="p-0 d-md-block d-none desktop">
                    <Tab.Container>
                        <Nav className="box-pills">
                            <Row className="m-0">
                                <Col sm={6} className="p-0">
                                    <div className="box-item hair-bestie">
                                        <Nav.Link eventKey="bestie" disabled>
                                            <Slide left>
                                                <div className="bestie-box tracking-in-expand">
                                                {/* add new fields
                                                    add classname box-space
                                                 */}
                                                <div className="box-space"></div>
                                                    <div className="box-text bestie-one mont-regular">
                                                        <h4>
                                                            Discover Your{' '}
                                                            <span className="mont-bold">
                                                                Hair Type
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="box-image">
                                                        <img
                                                            src={BestieMeet}
                                                            alt="Bestie Meet"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            </Slide>
                                        </Nav.Link>
                                    </div>
                                </Col>
                                <Col sm={6} className="p-0">
                                    <div className="box-item">
                                        <Nav.Link
                                            onClick={() => onContentClick(1)}
                                        >
                                            <Slide right>
                                                <div className="bestie-box">
                                                    <div className="box-text">
                                                        <h4 className="mont-semi">
                                                            {t(
                                                                'home.bestie.category1'
                                                            )}
                                                        </h4>
                                                    </div>
                                                    <div className="box-image">
                                                        <img
                                                            src={BestieDry}
                                                            alt="Bestie Dry"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                     {/* add new fields */}
                                                    <div className="box-space reverse"></div>
                                                </div>
                                            </Slide>
                                        </Nav.Link>
                                    </div>
                                </Col>
                                <Col sm={6} className="p-0">
                                    <div className="box-item">
                                        <Nav.Link
                                            onClick={() => onContentClick(2)}
                                        >
                                            <Slide left>
                                                <div className="bestie-box">
                                                 {/* add new fields */}
                                                    <div className="box-space reverse"></div>
                                                    <div className="box-image">
                                                        <img
                                                            src={BestieColored}
                                                            alt="Bestie Color"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                    <div className="box-text colored">
                                                        <h4 className="mont-semi">
                                                            {t(
                                                                'home.bestie.category2'
                                                            )}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Slide>
                                        </Nav.Link>
                                    </div>
                                </Col>
                                <Col sm={6} className="p-0">
                                    <div className="box-item">
                                        <Nav.Link
                                            onClick={() => onContentClick(3)}
                                        >
                                            <Slide right>
                                                <div className="bestie-box">
                                                    <div className="box-text bestie-four">
                                                        <h4 className="mont-semi">
                                                            {t(
                                                                'home.bestie.category3'
                                                            )}
                                                        </h4>
                                                    </div>
                                                    <div className="box-image fragile">
                                                        <img
                                                            src={BestieFragile}
                                                            alt="Bestie Fragile"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                     {/* add new fields */}
                                                    <div className="box-space">
                                                    </div>
                                                </div>
                                            </Slide>
                                        </Nav.Link>
                                    </div>
                                </Col>
                            </Row>
                        </Nav>

                        <div className="box-content">
                            <div className="box-item">
                                <ContentDry id={1} />
                            </div>
                            <div className="box-item">
                                <ContentColor id={2} />
                            </div>
                            <div className="box-item">
                                <ContentFragile id={3} />
                            </div>
                        </div>
                    </Tab.Container>
                </Container>

                <Container className="d-md-none d-block mobile">
                    <div className="title-section mont-bold">
                        Discover Your{' '}
                        <span className="mont-bold">Hair Type</span>
                    </div>
                    <SwiperMobile />
                </Container>
            </div>
        )
    }
}

export default withTrans(HomepageBestie)
