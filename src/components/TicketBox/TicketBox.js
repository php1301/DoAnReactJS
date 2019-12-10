import React, { Component } from 'react'
import TicketItem from '../TicketItem/TicketItem'
import TicketBoxHeader from '../PaymentHeader/PayementHeader'
import "../TicketBox/TicketBox.scss"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from "../../actions/ticketActions/getSeats"
class TicketBox extends Component {
    componentDidMount() {
        let idticket = this.props.match.params.idticket
        this.props.onSaveSeats(idticket)
    }
    render() {
        console.log(this.props.seats)

        return (
            <div>
                <div className="st_bt_top_header_wrapper float_left">
                    <div className="container container_seat">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="st_bt_top_back_btn st_bt_top_back_btn_seatl float_left">	<Link to={`/details/movie/${this.props.match.params.id}`}><i className="fas fa-long-arrow-alt-left" /> &nbsp;Back</Link>
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
                                <div className="st_bt_top_close_btn st_bt_top_close_btn2 float_left">	<Link to={`/details/movie/${this.props.match.params.id}`}><i className="fa fa-times" /></Link>
                                </div>
                                <div className="st_seatlay_btn float_left">	<Link to={`/ticket/${this.props.match.params.id}/payment`}>Proceed to Pay</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TicketItem idticket={this.props.match.params.idticket} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        seats: state.getSeats.result.danhSachGhe
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSaveSeats: (id) => {
            dispatch(action.getSeatsAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketBox)