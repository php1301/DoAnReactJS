import React, { Component } from 'react';
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import Movies from '../Movies/Movies';

export default class Carousel extends Component {
    render() {
        return (
            <div className="wow fadeIn" data-wow-duration="3s">
                {/* {this.renderHTML()} */}
                {
                    this.props &&
                    <Movies
                        
                            items ={this.props.items}
                        
                    // upcoming={this.props.upcoming}
                    />
                }
            </div>
        )
    }
}