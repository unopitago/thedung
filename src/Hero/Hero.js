import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Data from '../data.json'

import './Hero.css'
import thedung from '../vendor/img/thedung.jpg'

class Header extends React.Component {
    render() {
        return (
            <section className="hero-section spad">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col lg="6">
                                    <div className="hero-text">
                                        <h2>{Data.Hero.Name}</h2>
                                        <p>{Data.Hero.Text}</p>
                                    </div>
                                    <div className="hero-info">
                                        <h2>{Data.Hero.Title}</h2>
                                        <ul>
                                            {Data.Hero.Infos.map( item => (
                                                <li><span>{item.name}</span>{item.content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg="6" className="text-md-center">
                                    <figure className="hero-image">
                                        <img src={thedung} alt="5" />
                                    </figure>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Header