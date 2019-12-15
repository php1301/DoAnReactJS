import React, { Component } from 'react'
import PaymentHeader from '../PaymentHeader/PayementHeader'

export default class Payment extends Component {
    shouldComponentUpdate(){
        console.log(this.props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="st_dtts_wrapper float_left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="st_dtts_left_main_wrapper float_left">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="st_dtts_ineer_box float_left">
                                                <ul>
                                                    <li><span className="dtts1">Book: </span>  <span className="dtts2">{this.props.history.location.state.itemDetails.original_title}</span></li>
                                                    <li><span className="dtts1">Date</span>  <span className="dtts2">{this.props.history.location.state.timeset}</span>
                                                    </li>
                                                    <li><span className="dtts1">Time</span>  <span className="dtts2">{this.props.history.location.state.items}</span>
                                                    </li>
                                                    <li><span className="dtts1">Theater</span>  <span className="dtts2">{this.props.history.location.state.tenrap}</span>
                                                    </li>
                                                    <li><span className="dtts1">Seat</span>  <span className="dtts2">{this.props.history.location.state.tenrap} - {this.props.history.location.state.viTri.map((item, index)=>{
                                                        while(index < this.props.history.location.state.viTri.length - 1){
                                                        
                                                        return (item + ",")
                                                        }
                                                        if(index = this.props.history.location.state.viTri.length)
                                                            return(item)
                                                    })}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="st_cherity_section float_left">
                                                <div className="st_cherity_img float_left">
                                                    <img src={`https://image.tmdb.org/t/p/w780//${this.props.history.location.state.itemDetails.backdrop_path}`} alt="img" />
                                                </div>
                                                <div className="st_cherity_img_cont float_left">
                                                    <div className="box">
                                                        <p className="cc_pc_color1">
                                                            <input type="checkbox" id="c201" name="cb" />
                                                            <label htmlFor="c201"><span>ADD Rs. 2</span> to your transaction as a donation. (Uncheck if you do not wish to donate)</label>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="st_cherity_btn float_left">
                                                <h3>SELECT TICKET TYPE</h3>
                                                <ul>
                                                    <li><a href="#"><i className="flaticon-tickets" /> &nbsp;M-Ticket</a>
                                                    </li>
                                                    <li><a href="#"><i className="flaticon-tickets" /> &nbsp;Box office Pickup </a>
                                                    </li>
                                                    <li><a href="confirmation_screen.html">Proceed to Pay </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="st_dtts_bs_wrapper float_left">
                                            <div className="st_dtts_bs_heading float_left">
                                                <p>Booking summary</p>
                                            </div>
                                            <div className="st_dtts_sb_ul float_left">
                                                <ul>
                                                    <li>Platinum - PB7, PB8
                    <br />( 2 Tickets ) AUDI-5 <span>Rs . 790.00</span>
                                                    </li>
                                                    <li>Internet handling fees <span>Rs.70.80</span>
                                                    </li>
                                                </ul>
                                                <p>Booking Fees <span>Rs.60.00</span>
                                                </p>
                                                <p>Integrated GST (IGST) @ 18% <span>Rs.60.00</span>
                                                </p>
                                            </div>
                                            <div className="st_dtts_sb_h2 float_left">
                                                <h3>Sub total <span>Rs.860.80</span></h3>
                                                <h4>Current State is <span>Kerala</span></h4>
                                                <h5>Payable Amount <span>Rs.860.80</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
