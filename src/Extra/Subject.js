import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

class Subject extends React.Component {
    render() {
        return (
            <Col lg="3" md="6">
                <div className="fact-box">
                    <div className="fact-content">
                        <img src={require(`../vendor/img/icon/${this.props.img}`)} alt={this.props.imgAlt} />
                        <h2>{this.props.number}</h2>
                        <p>{this.props.major}</p>
                    </div>
                </div>
            </Col>
        )
    }
}

Subject.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    number: PropTypes.string,
    major: PropTypes.string
}

export default Subject