import React from 'react'
import PropTypes from 'prop-types'
import CircularProgressbar from 'react-circular-progressbar'
import { Col } from 'reactstrap'


class Circular extends React.Component {
    render() {
        return (
            <Col lg="3" md="6">
                <div className="fact-box trans">
                    <div className="fact-content">
                        <div className="circle-progress">
                            <CircularProgressbar percentage={this.props.percentage}>
                                <h2>{this.props.contentPercentage}</h2>
                            </CircularProgressbar>
                            <div className="prog-title">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

Circular.propTypes = {
    percentage: PropTypes.string,
    contentPercentage: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
}

export default Circular