import React, { Component, Fragment } from 'react'
import Seats from './Seats';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
export default class SeatItems extends Component {

  
    renderSeats = () => {
        let count = 0;
        return this.props.seats && this.props.seats.map((item, index) => {
            count++;
            if (index < 11) {
                return (
                    <Seats  handleVe={this.props.handleVe} viTri = {this.props.viTri}  alpha={this.props.alpha} handleCount={this.props.handleCount} daDat={this.props.daDat} item={count} />
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
