import React, { Component, Fragment } from 'react'
import Seats from './Seats';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
export default class SeatItems extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         daDat: false,
    //     }
    // }
    renderSeats = () => {
        let count = 0;
        return this.props.seats && this.props.seats.map((item, index) => {
            count++;
            if (index < 11) {
                return (
                    <Seats handleCount={this.props.handleCount} daDat={this.props.daDat} item={count} />
                )
            }
        })
    }

    render() {
        return (
            this.renderSeats()
        )
    }
}
