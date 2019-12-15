import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PaymentHeader from '../PaymentHeader/PayementHeader'
import firestore from "../../firestore"
import firebase from 'firebase'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giaoDich: [],
            giaVe: 75000,
            phanGiam: 0,
            disabled: false,
            special: false,
            sum: 0
        }
    }

    handleThem = () => {
        let phanGiam = this.state.phanGiam !==0 ? -this.state.phanGiam * this.props.history.location.state.viTri.length : 0
        let special = this.state.special ? 30000 * this.props.history.location.state.viTri.length : 0 
        let other = phanGiam + special 
        let sum = this.props.history.location.state.viTri.length * this.state.giaVe + other
        const objGiaoDich = {
            tenPhim: this.props.history.location.state.itemDetails.title,
            ngayChieu: this.props.history.location.state.timeset,
            gioChieu: this.props.history.location.state.items,
            tenRap: this.props.history.location.state.tenrap,
            listGhe: this.props.history.location.state.viTri,
            sum: {sum}
        }
        this.state.giaoDich.push(objGiaoDich)
        this.setState({
            giaoDich: this.state.giaoDich,
            sum: {sum}
        }, console.log(this.state.giaoDich))
        console.log(this.state.giaoDich)

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("payment").add({
            tenPhim: this.props.history.location.state.itemDetails.title,
            ngayChieu: this.props.history.location.state.timeset,
            gioChieu: this.props.history.location.state.items,
            tenRap: this.props.history.location.state.tenrap,
            listGhe: this.props.history.location.state.viTri,
            sum: {sum}
        });
    }
    handleCheck = () => {
        if (this.codeValue.value === "NOEL"){
            store.addNotification({
                title: "Success",
                message: "Code applied Successfully",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: false
                }
              })
            this.setState((prevState) =>({
                phanGiam: 20000,
                disabled: true                
            }),console.log(this.state.phanGiam))
        }
        else{
            store.addNotification({
                title: "Fail to apply Code",
                message: "Wrong Code :( ",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: false
                }
              })
        }
    }
    handle3D = () =>{
        this.setState({
            special: !this.state.special
        })
    }
    render() {
        let phanGiam = this.state.phanGiam !==0 ? -this.state.phanGiam * this.props.history.location.state.viTri.length : 0
        let special = this.state.special ? 30000 * this.props.history.location.state.viTri.length : 0 
        let other = phanGiam + special 
        let sum = this.props.history.location.state.viTri.length * this.state.giaVe + other
        console.log(this.props)
        return (
            
            <div>
            <ReactNotification />
                <div className="st_dtts_wrapper float_left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="st_dtts_left_main_wrapper float_left">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="st_dtts_ineer_box float_left">
                                                <ul>
                                                    <li><span className="dtts1">Book: </span>  <span className="dtts2">{this.props.history.location.state.itemDetails.title}</span></li>
                                                    <li><span className="dtts1">Date</span>  <span className="dtts2">{this.props.history.location.state.timeset}</span>
                                                    </li>
                                                    <li><span className="dtts1">Time</span>  <span className="dtts2">{this.props.history.location.state.items}</span>
                                                    </li>
                                                    <li><span className="dtts1">Theater</span>  <span className="dtts2">{this.props.history.location.state.tenrap}</span>
                                                    </li>
                                                    <li><span className="dtts1">Seat</span>  <span className="dtts2">{this.props.history.location.state.tenrap} - {this.props.history.location.state.viTri.map((item, index) => {
                                                        while (index < this.props.history.location.state.viTri.length - 1) {

                                                            return (item + ",")
                                                        }
                                                        if (index = this.props.history.location.state.viTri.length)
                                                            return (item)
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
                                                            <input style={{color: "black", width:"100%"}}type="textarea" id="c201" name="cb" placeholder="Have Promo Code? Enter here" disabled={this.state.disabled} ref={el => this.codeValue=el}  />
                                                            <div className="st_cherity_btn float_left">
                                                            <a></a>
                                                            <li><a onClick={this.handleCheck}><i className="flaticon-tickets" /> &nbsp;Check</a></li>
                                                            <a></a>
                                                            </div>
                                                            <label htmlFor="c201"><span>ADD Rs. 2</span> to your transaction as a donation. (Uncheck if you do not wish to donate)</label>
                                                        </p></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="st_cherity_btn float_left">
                                                <h3>SELECT TICKET TYPE</h3>
                                                <ul>
                                                    <li><a className={this.state.special === false ? " special1" : "special2"} onClick ={this.handle3D} ><i className="flaticon-tickets" />3D</a>
                                                    </li>
                                                    <li><Link to={"/"}><i className="flaticon-tickets" /> &nbsp;Box office Pickup </Link>
                                                    </li>
                                                    <li><a onClick={this.handleThem}>Proceed to Pay </a>
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
                                                    <li>{this.props.history.location.state.tenrap} - {this.props.history.location.state.viTri.map((item, index) => {
                                                        while (index < this.props.history.location.state.viTri.length - 1) {

                                                            return (item + ",")
                                                        }
                                                        if (index = this.props.history.location.state.viTri.length)
                                                            return (item)
                                                    })}
                                                        <br />{this.props.history.location.state.count === 1 || this.props.history.location.state.count === 0 ? this.props.history.location.state.count + " Ticket" : this.props.history.location.state.count + " Tickets"} <br/> <span>{this.props.history.location.state.viTri.length * this.state.giaVe + " VNĐ"}</span>
                                                    </li>
                                                    <li>Other fees <span></span>
                                                    </li>
                                                </ul>
                                                <p>Discount Code <span> <bold>-</bold> {this.state.phanGiam * this.props.history.location.state.viTri.length + " VNĐ"} </span>
                                                </p>
                                                <p>3D <span>{this.state.special ? 30000 * this.props.history.location.state.viTri.length + " VNĐ" : 0 + " VNĐ" }</span>
                                                </p>
                                            </div>
                                            <div className="st_dtts_sb_h2 float_left">
                                                <h3>  Sub total <span> {other} VNĐ</span></h3>
                                                <h4>Current City is <span>Ho Chi Minh</span></h4>
                                                <h5>Payable Amount <span>{sum}</span></h5>
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
