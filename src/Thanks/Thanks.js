import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Data from '../data.json'

import './Thanks.css'

class Thanks extends React.Component {
    render() {
        return (
            <section className="thanks-section spad">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 8, offset: 2 }}>
                            <h2 className="say-thanks">{Data.Thanks.title}</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Thanks