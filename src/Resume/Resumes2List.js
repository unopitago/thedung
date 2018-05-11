import React from 'react'
import PropTypes from 'prop-types'


class Resumes2List extends React.Component {
    render() {
        return (
            <li>
                <h2>{this.props.time}</h2>
                <h3>{this.props.title}</h3>
                <h4>{this.props.school}</h4>
                <p>{this.props.detail}</p>
            </li>
        )
    }
}

Resumes2List.propTypes = {
    time: PropTypes.string,
    title: PropTypes.string,
    school: PropTypes.string,
    detail: PropTypes.string
}

export default Resumes2List