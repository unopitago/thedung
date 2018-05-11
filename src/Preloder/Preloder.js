import React from 'react'
import './Preloder.css'
import $ from 'jquery'

class Preloder extends React.Component {
    componentDidMount() {
        $(window).on('load', function() {
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
    }

    render() {
        return (
            <div id="preloder">
                <div class="loader"></div>
            </div>
        )
    }
}

export default Preloder