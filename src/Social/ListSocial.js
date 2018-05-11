import React from 'react'
import PropTypes from 'prop-types'

import FontAwesomeIcon from 'react-fontawesome'
import '../vendor/css/font-awesome.min.css'
import '../vendor/icon-fonts/fontawesome-webfont.ttf'

class ListSocial extends React.Component {
    render() {
        return (
            <a href={this.props.href}>
                <FontAwesomeIcon className={this.props.icon} />
            </a>
        )
    }
}

ListSocial.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.string
}

export default ListSocial