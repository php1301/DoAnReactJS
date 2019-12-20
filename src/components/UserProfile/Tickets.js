import React, { Fragment, Component } from 'react'
import firebase from 'firebase'
import firebaseConfig from "../../firestore"
export default class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.firebaseRender()
        this.renderState()
    }

    renderItem = () => {
        console.log(this.state.data)
        return this.state.data && this.state.data.map((item, index) => {
            let length = item._document.proto.fields.data.mapValue.fields.listGhe.arrayValue.values.length
            console.log("data logging", this.state.data)

            if (this.state.data.length < 1) {
                return (
                    <h3 className="user-profile-container-main-container-item-warning">
                        No Ticket transactions found  :( </h3>
                )
            }
            else
                return (
                    <div>
                        <Fragment>
                            <div className="st_bcc_main_main_wrapper float_left">
                                <div className="st_bcc_main_wrapper">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="st_bcc_heading_wrapper float_left">	<i className="fa fa-check-circle" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="st_bcc_ticket_boxes_wrapper float_left">
                                                    <div className="st_bcc_tecket_top_hesder float_left">
                                                        <p>Your Booking is Confirmed!</p>	<span>Booking ID {item.id.slice(1, 10)}  </span>
                                                    </div>
                                                    <div className="st_bcc_tecket_bottom_hesder float_left">
                                                        <div className="st_bcc_tecket_bottom_left_wrapper">
                                                            <div className="st_bcc_tecket_bottom_inner_left">
                                                                <div className="st_bcc_teckt_bot_inner_img">
                                                                    <img src={`https://image.tmdb.org/t/p/w92/${item._document.proto.fields.data.mapValue.fields.photo.stringValue}`} alt="img" />
                                                                </div>
                                                                <div className="st_bcc_teckt_bot_inner_img_cont">
                                                                    <h4>{item._document.proto.fields.data.mapValue.fields.tenPhim.stringValue}</h4>
                                                                    <h5>Malayalam, 2D</h5>
                                                                    <h3>{item._document.proto.fields.data.mapValue.fields.ngayChieu.stringValue} | {item._document.proto.fields.data.mapValue.fields.gioChieu.stringValue}</h3>
                                                                    <h6>Carnival: Artech Central Mall,<br />
                                                                        {item._document.proto.fields.data.mapValue.fields.tenrap.stringValue}</h6>
                                                                </div>
                                                                <div className="st_purchase_img">
                                                                    <img src="http://www.webstrot.com/html/moviepro/html/images/content/pur2.png" alt="img" />
                                                                </div>
                                                            </div>
                                                            <div className="st_bcc_tecket_bottom_inner_right">
                                                                <h3>{item._document.proto.fields.data.mapValue.fields.listGhe.arrayValue.values.length > 1 ? item._document.proto.fields.data.mapValue.fields.listGhe.arrayValue.values.length + " TICKETS" : item._document.proto.fields.data.mapValue.fields.listGhe.arrayValue.values.length + " TICKET"} <br />
                                                                    <span>{item._document.proto.fields.data.mapValue.fields.tenrap.stringValue} - {item._document.proto.fields.data.mapValue.fields.listGhe.arrayValue.values.map((item23, index) => {
                                                                        if (length - 1 > index)
                                                                            return item23.stringValue + ", "
                                                                        else
                                                                            return item23.stringValue
                                                                    })}</span>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="st_bcc_tecket_bottom_right_wrapper">
                                                            <img src={`https://image.tmdb.org/t/p/w92/${item._document.proto.fields.data.mapValue.fields.photo.stringValue}`} alt="img" />
                                                            <h4>Booking ID<br />{item.id.slice(1, 10)}</h4>
                                                        </div>
                                                        <div className="st_bcc_tecket_bottom_left_price_wrapper">
                                                            <h4>Total Amount</h4>
                                                            <h5>{item._document.proto.fields.data.mapValue.fields.sum.integerValue + "VNĐ"}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="st_bcc_ticket_boxes_bottom_wrapper float_left">
                                                    <p>You can access your ticket from your Profile. We will send you
              <br />an e-Mail/SMS Confirmation with in 15 Minutes.</p>
                                                    <ul>
                                                        <li><a href="#">INVITE FRIENDS</a>
                                                        </li>
                                                        <li><a href="#">Locate Friend</a>
                                                        </li>
                                                    </ul>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    </div>
                )
        })

    }
    firebaseRender = async () => {
        let uid = localStorage.getItem('uid')
        let arrToPush = []
        const db = firebase.firestore();
        await db.collection("user").doc(uid).collection("payment").get()
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    arrToPush.push(doc)
                });
            });
        console.log(arrToPush)
        return arrToPush
        // this.setState({
        //    data: arrToPush
        // }, console.log(this.state.data))
        // this.renderItem()
    }
    renderState = async () => {
        const arrToPush = await this.firebaseRender()
        console.log(arrToPush)
        this.setState({
            data: arrToPush
        })
        console.log(this.state.data)
    }
    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}
