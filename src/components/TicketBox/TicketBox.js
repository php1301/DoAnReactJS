import React, { Component } from 'react'
import TicketItem from '../TicketItem/TicketItem'
import "../TicketBox/TicketBox.scss"
export default class TicketBox extends Component {
    render() {
        return (
            <div>
                <div className="st_bt_top_header_wrapper float_left">
                    <div className="container container_seat">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="st_bt_top_back_btn st_bt_top_back_btn_seatl float_left">	<a href="movie_booking.html"><i className="fas fa-long-arrow-alt-left" /> &nbsp;Back</a>
                                </div>
                                <div className="cc_ps_quantily_info cc_ps_quantily_info_tecket">
                                    <p>Select Ticket</p>
                                    <div className="select_number">
                                        <button onclick="changeQty(1); return false;" className="increase"><i className="fa fa-plus" />
                                        </button>
                                        <input type="text" name="quantity" defaultValue={1} size={2} id="input-quantity" className="form-control" />
                                        <button onclick="changeQty(0); return false;" className="decrease"><i className="fa fa-minus" />
                                        </button>
                                    </div>
                                    <input type="hidden" name="product_id" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="st_bt_top_center_heading st_bt_top_center_heading_seat_book_page float_left">
                                    <h3>Aquaman - English - (2:47)</h3>
                                    <h4>Today, 19 Dec, 10:00 PM</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="st_bt_top_close_btn st_bt_top_close_btn2 float_left">	<a href="#"><i className="fa fa-times" /></a>
                                </div>
                                <div className="st_seatlay_btn float_left">	<a href="booking_type.html">Proceed to Pay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TicketItem />
            </div>
        )
    }
}
