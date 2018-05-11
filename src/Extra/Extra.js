import React from 'react'
// import CircularProgressbar from 'react-circular-progressbar'
import { Container, Row, Col } from 'reactstrap'
import Circular from './Circular'
import Data from '../data.json'

import './Extra.css'
import '../../node_modules/react-circular-progressbar/dist/styles.css'
import Subject from "./Subject";

class Extra extends React.Component {
    render() {
        return (
            <section className="extra-section spad pb-0">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 8, offset: 2 }}>
                            <div className="section-title">
                                <h2>Kỹ năng</h2>
                            </div>
                            <Row>

                                {Data.Extra.circular.map( item => (
                                    <Circular
                                        percentage={item.percentage}
                                        contentPercentage={item.contentPercentage}
                                        title={item.title}
                                        content={item.content}
                                    />
                                ))}

                                {Data.Extra.subject.map( item => (
                                    <Subject
                                        img={item.img}
                                        imgAlt={item.imgAlt}
                                        number={item.number}
                                        major={item.major}
                                    />
                                ))}

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Extra