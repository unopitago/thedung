import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Data from '../data.json'
import ResumesList from './ResumesList'

import './Resume.css'

class Resume extends React.Component {
    render() {
        return (
            <section className="resume-section spad">
                <Container fluid={true}>
                    <Row>
                        <Col xl={{ size: 7, offset: 1 }}>
                            <div className="section-title">
                                <h2>{Data.Resume.Title}</h2>
                            </div>
                            <ul className="resume-list">
                                {Data.Resume.Infos.map( info => (
                                    <ResumesList
                                        time={info.time}
                                        company={info.company}
                                        working={info.working}
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

export default Resume