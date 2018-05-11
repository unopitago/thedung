import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Data from '../data.json'

import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="header-section">
                <Container fluid={true} >
                    <Row>
                        <Col md="4">
                            <div className="site-logo">
                                <h2><a href="http://unopitago.github.io">{ Data.Header.Name }</a></h2>
                                <p>{ Data.Header.Title }</p>
                            </div>
                        </Col>
                        <Col md="8" className="text-md-right header-buttons">
                            <Button className="site-btn">{ Data.Header.Button1 }</Button>
                            <Button className="site-btn">{ Data.Header.Button2 }</Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}

export default Header