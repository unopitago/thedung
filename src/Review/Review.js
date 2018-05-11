import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import { Container, Row, Col } from 'reactstrap'
import Data from '../data.json'
import Slide from './Slide'

import './Review.css'

class Review extends React.Component {
    render() {
        return (
            <section className="review-section spad pb-0">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 7, offset: 2 }}>
                            <div className="section-title">
                                <h2>{Data.Review.Title}</h2>
                            </div>
                            <OwlCarousel className="owl-theme owl-carousel" items="1" >
                                {Data.Review.Slide.map( item => (
                                    <Slide
                                        content={item.content}
                                        name={item.name}
                                        title={item.title}
                                    />
                                ))}
                            </OwlCarousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Review