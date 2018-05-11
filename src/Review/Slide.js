import React from 'react'
import PropTypes from 'prop-types'


class Slide extends React.Component {
    render() {
        return (
            <div className="single-review">
                <div className="qut">“</div>
                <p>{this.props.content}</p>
                <h3>{this.props.name}</h3>
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

Slide.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
}

export default Slide