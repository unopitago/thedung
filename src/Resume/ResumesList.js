import React from 'react'
import PropTypes from 'prop-types'


class ResumesList extends React.Component {
    render() {
        return (
            <li>
                <h2>{this.props.time}</h2>
                <h3>{this.props.company}</h3>
                <h4>{this.props.working}</h4>
                <p>{this.props.detail}</p>
            </li>
        )
    }
}

ResumesList.propTypes = {
    time: PropTypes.string,
    company: PropTypes.string,
    working: PropTypes.string,
    detail: PropTypes.string
}

export default ResumesList