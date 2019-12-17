import React, { Component } from 'react'
import '../TicketBox/TicketBox.scss'
import firestore from "../../firestore"
import firebase from 'firebase'
const db = firebase.firestore();
var docRef = db.collection("payment").doc("PBKBDfjp018bL0HHb1Xp");

docRef.get().then(function(doc) {
if (doc.exists) {
    console.log("Document data:", doc.data());
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}
}).catch(function(error) {
console.log("Error getting document:", error);
});
export default class PayementDetails extends Component {
    render() {
        return (
            
            <div className="st_bcc_main_main_wrapper float_left">
                <div className="st_bcc_main_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="st_bcc_heading_wrapper float_left">	<i className="fa fa-check-circle" />
                                    <h3>Payment of <span>{this.props.history.location.state.sum + " VNĐ"}</span> Complete successfull</h3>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="st_bcc_ticket_boxes_wrapper float_left">
                                    <div className="st_bcc_tecket_top_hesder float_left">
                                        <p>Your Booking is Confirmed!</p>	<span>Booking ID SSST0000310644 </span>
                                    </div>
                                    <div className="st_bcc_tecket_bottom_hesder float_left">
                                        <div className="st_bcc_tecket_bottom_left_wrapper">
                                            <div className="st_bcc_tecket_bottom_inner_left">
                                                <div className="st_bcc_teckt_bot_inner_img">
                                                    <img src={`https://image.tmdb.org/t/p/w92/${this.props.history.location.state.itemDetails.poster_path}`} alt="img" />
                                                </div>
                                                <div className="st_bcc_teckt_bot_inner_img_cont">
                                                    <h4>{this.props.history.location.state.itemDetails.title}</h4>
                                                    <h5>Malayalam, 2D</h5>
                                                    <h3>Mon, 31 Dec | 09.30PM</h3>
                                                    <h6>Carnival: Artech Central Mall,<br />
                                                        Trivandrum Audi-5</h6>
                                                </div>
                                                <div className="st_purchase_img">
                                                    <img src="http://www.webstrot.com/html/moviepro/html/images/content/pur2.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="st_bcc_tecket_bottom_inner_right">
                                                <h3>{this.props.history.location.state.count > 1 ? this.props.history.location.state.count + " TICKETS": this.props.history.location.state.count + " TICKET"} <br />
                                                    <span>{this.props.history.location.state.tenrap} - {this.props.history.location.state.listGhe.map((item,index) =>{
                                                       if(this.props.history.location.state.listGhe.length - 1 > index)
                                                       return item + ", "
                                                       else
                                                       return item
                                                    })}</span></h3>
                                            </div>
                                        </div>
                                        <div className="st_bcc_tecket_bottom_right_wrapper">
                                            <img src={`https://image.tmdb.org/t/p/w92/${this.props.history.location.state.itemDetails.poster_path}`} alt="img" />
                                            <h4>Booking ID<br />SSST0000310644</h4>
                                        </div>
                                        <div className="st_bcc_tecket_bottom_left_price_wrapper">
                                            <h4>Total Amount</h4>
                                            <h5>{this.props.history.location.state.sum + "VNĐ"}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="st_bcc_ticket_boxes_bottom_wrapper float_left">
                                    <p>You can access your ticket from your Profile. We will send you
              <br />an e-Mail/SMS Confirmation with in 15 Minutes.</p>
                                    <ul>
                                        <li><a href="#">INVITE FRIENDS</a>
                                        </li>
                                        <li><a href="#">Locate Friend</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
