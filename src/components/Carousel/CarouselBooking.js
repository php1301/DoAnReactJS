import React, { Component } from 'react'
import MoviesBooking from '../Movies/MoviesBooking'

export default class CarouselBooking extends Component {
    render() {
        return (
            <div className="wow fadeIn" data-wow-duration="3s">
                {/* {this.renderHTML()} */}
                {
                    this.props &&
                    <MoviesBooking

                        items={this.props.items}

                    // upcoming={this.props.upcoming}
                    />
                }
            </div>
        )
    }
}