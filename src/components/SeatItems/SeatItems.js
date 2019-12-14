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
    // componentDidMount() {
    //     this.props.onSaveSeats.bind(this, this.props.maLichChieu)
    // }
    renderSeats = () => {
        let count = 0;
        return this.props.seats && this.props.seats.map((item, index) => {
            count++;
            if (index < 11) {
                return (
                    <Seats onSaveSeats={this.props.onSaveSeats} maLichChieu={this.props.maLichChieu} handleCount={this.props.handleCount} daDat={this.props.daDat} item={count} />
                )
            }
        })
    }

    render() {
        // console.log(this.props.onSaveSeats.bind(this, this.props.maLichChieu))
        return (
            this.renderSeats()
        )
    }
}
