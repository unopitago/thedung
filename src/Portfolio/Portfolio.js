import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Data from '../data.json'
import Item from './Item'

import './Portfolio.css'

/*import pic1 from '../vendor/img/portfolio/pic1.jpg'
import pic2 from '../vendor/img/portfolio/pic2.png'
import pic3 from '../vendor/img/portfolio/pic3.png'
import pic4 from '../vendor/img/portfolio/pic4.png'*/

class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio-section spad pb-0">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 4, offset: 2 }} md="8">
                            <div className="section-title">
                                <h2>{Data.Portfolio.title}</h2>
                            </div>
                        </Col>
                        <Col md="4" className="text-md-right">
                            <Button className="site-btn mb-5">{Data.Portfolio.button}</Button>
                        </Col>
                    </Row>
                    <div className="portfolio-warp">
                        <Row>
                            {Data.Portfolio.items.map( item => (
                                <Item
                                    img={item.img}
                                    imgAlt={item.imgAlt}
                                    title={item.title}
                                    detail={item.detail}
                                />
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
        )
    }
}

export default Portfolio