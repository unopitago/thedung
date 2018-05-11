import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'reactstrap'

class Item extends React.Component {
    render() {
        return (
            <Col xl="3" lg="6" md="6">
                <div className="portfolio-item">
                    <a href="" className="set-bg port-pic">
                        <img src={require(`../vendor/img/portfolio/${this.props.img}`)} alt={this.props.imgAlt} />
                    </a>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.detail}</p>
                </div>
            </Col>
        )
    }
}

Item.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    detail: PropTypes.string
}

export default Item