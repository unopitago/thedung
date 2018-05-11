import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Data from '../data.json'
import ListSocial from './ListSocial'

import './Social.css'

class Social extends React.Component {
    render() {
        return (
            <div className="social-section" id="social">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 10, offset: 1 }}>
                            <div className="social-link-warp">
                                <div className="social-links">
                                    {Data.Icons.map( item => (
                                        <ListSocial
                                            icon={item.icon}
                                            href={item.href}
                                        />
                                    ))}
                                </div>
                                <h2 className="hidden-md hidden-sm">{Data.Social.Title}</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Social