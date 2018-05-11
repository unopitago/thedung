import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Data from '../data.json'
import Resumes2List from './Resumes2List'

import './Resume.css'

class Resume2 extends React.Component {
    render() {
        return (
            <section className="resume-section spad">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 7, offset: 2 }}>
                            <div className="section-title">
                                <h2>{Data.Resume2.Title}</h2>
                            </div>
                            <ul className="resume-list">
                                {Data.Resume2.Infos.map( info => (
                                    <Resumes2List
                                        time={info.time}
                                        title={info.title}
                                        school={info.school}
                                        detail={info.detail}
                                    />
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Resume2