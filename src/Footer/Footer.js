import React from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import { Container } from 'reactstrap'
import Data from '../data.json'

import './Footer.css'
import '../vendor/css/font-awesome.min.css'
import '../vendor/icon-fonts/fontawesome-webfont.ttf'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section">
                <Container className="text-center">
                    <div className="copyright">
                        {Data.Footer.copyright} | {Data.Footer.info}
                        <FontAwesomeIcon className={Data.Footer.icon} />
                        <a href={Data.Footer.href}>{Data.Hero.Name}</a>
                    </div>
                </Container>
            </footer>
        )
    }
}

export default Footer