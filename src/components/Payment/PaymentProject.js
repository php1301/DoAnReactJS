import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import cookie from 'js-cookie'
import PaymentHeader from '../PaymentDetails/PaymentDetails'
import firestore from "../../firestore"
import firebase from 'firebase'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import CreditCardProject from './CreditCardProject'
import Map from "../Modal/Map"
import PageNotFound from '../PageNotFound/PageNotFound'
class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            giaoDich: [],
            phanGiam: 0,
            disabled: false,
            daDung: false,
            special: false,
            sum: 0,
            choose: 0,
            type: "Ticket Type",
            pay: false,
            credit: false,
            promise: false,
            isBirthday: false,
            points: 60,
            pointsUsed: 0,
            method: ""
        }
    }

    handleThem = () => {
        // let phanGiam = this.state.phanGiam !== 0 ? -this.state.phanGiam * this.props.history.location.state.viTri.length : 0
        // let special = this.state.special ? this.state.choose * this.props.history.location.state.viTri.length : 0
        // let other = phanGiam + special
        // let sum = this.props.history.location.state.viTri.length * this.state.giaVe + other
        // const objGiaoDich = {
        //     tenPhim: this.props.history.location.state.itemDetails.title,
        //     ngayChieu: this.props.history.location.state.timeset,
        //     gioChieu: this.props.history.location.state.items,
        //     tenRap: this.props.history.location.state.tenrap,
        //     listGhe: this.props.history.location.state.viTri,
        //     sum: { sum }
        // }
        // this.state.giaoDich.push(objGiaoDich)
        this.setState({
            // giaoDich: this.state.giaoDich,
            // sum: { sum },
            pay: true
        }, console.log(this.state.giaoDich))
        // console.log(this.state.giaoDich)

        // const db = firebase.firestore();
        // db.settings({
        //     timestampsInSnapshots: true
        // });
        // const userRef = db.collection("payment").add({
        //     tenPhim: this.props.history.location.state.itemDetails.title,
        //     ngayChieu: this.props.history.location.state.timeset,
        //     gioChieu: this.props.history.location.state.items,
        //     tenRap: this.props.history.location.state.tenrap,
        //     listGhe: this.props.history.location.state.viTri,
        //     sum: { sum }
        // });
    }
    handleCheck = () => {
        if (this.codeValue.value === "NOEL" && this.state.daDung === false) {
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
            this.setState(() => ({
                phanGiam: 20000,
                disabled: true,
                daDung: true
            }), console.log(this.state.phanGiam))
        }
        if (this.state.daDung === true) {
            store.addNotification({
                title: "Code was used",
                message: "Code was used before",
                type: "default",
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
        if (this.codeValue.value !== "NOEL") {
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
    handleType = (event) => {
        this.setState({
            special: true,
            choose: event.target.value,
            type: event.target.pattern.split(" ")[0]
        })
    }
    handleMethod = (event) => {
        if (event.target.value === "promise") {
            this.setState({
                method: event.target.value,
                promise: true
            })
        }
        else {
            this.setState({
                method: event.target.value,
                promise: false
            })
        }
        if (event.target.value === "form") {
            this.setState({
                method: event.target.value,
                credit: true
            })
        }
        else {
            this.setState({
                method: event.target.value,
                credit: false
            })
        }
    }
    handleUsePoints = (event) =>{
        console.log(this.pointsText.value)
        console.log(parseInt(this.pointsText.value))
        const pointsEntered = parseInt(this.pointsText.value)
        if(pointsEntered < 0 || isNaN(pointsEntered)) {
            store.addNotification({
                title: "Fail",
                message: "Please enter points valid",
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
        else{
            if(pointsEntered > this.state.points){
                store.addNotification({
                    title: "Fail",
                    message: "Not enough points",
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
            else{
                store.addNotification({
                    title: "Success",
                    message: "Points applied",
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
                this.setState((prev)=>({
                    points: prev.points - pointsEntered,
                    pointsUsed: prev.pointsUsed + pointsEntered
                }))
            }
        }
    }

   async componentDidMount(){
        const api = cookie.get('api');        
        const userId = cookie.get('id')
        const dataUser = await fetch(`${api || 'http://localhost:3001'}/user/${userId}/birthday-and-points`)
        const contentUser = await dataUser.json()
        this.setState({
            points: contentUser.points,
            isBirthday: contentUser.isBirthday
        })
    }
    render() {
        if (cookie.get('id') && cookie.get('username') && cookie.get('email') ) {
            const {points, pointsUsed, isBirthday} = this.state;
            const {daDat, details, thoiLuong, gioChieu, ngayChieu, thongTinRap, giaVe, maLichChieu} = this.props.history.location.state
            let numberOfTicket = daDat.list.length
            let numberOfNormalTicket = daDat.list.filter(i=>i.maLoaiGhe===1).length
            let numberOfVipTicket = numberOfTicket - numberOfNormalTicket
            let phanGiam = this.state.phanGiam !== 0 ? this.state.phanGiam * numberOfTicket : 0
            let special = this.state.choose * numberOfTicket
            let birthdayDiscount = isBirthday ? ((numberOfNormalTicket * giaVe) + ((numberOfVipTicket * giaVe) /2) + special)*10/100 : 0;
            let other = -phanGiam + special -pointsUsed*10 - birthdayDiscount
            let sum = (numberOfNormalTicket * giaVe) + ((numberOfVipTicket * giaVe) /2) + other > 0 ? (numberOfNormalTicket * giaVe) + ((numberOfVipTicket * giaVe) /2) + other : 0
            let tenHeThongRap = thongTinRap.tenCumRap.split(" ")[0]
            // console.log(this.props)
            return (
                <Fragment>
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
                                                            <li><span className="dtts1">Book: </span>  <span className="dtts2">{details.tenPhim}</span></li>
                                                            <li><span className="dtts1">Date</span>  <span className="dtts2">{ngayChieu}</span>
                                                            </li>
                                                            <li><span className="dtts1">Time</span>  <span className="dtts2">{gioChieu}</span>
                                                            </li>
                                                            <li><span className="dtts1">Theater</span>  <span className="dtts2">{thongTinRap.tenCumRap}</span>
                                                            </li>
                                                            <li><span className="dtts1">Seat</span>  <span className="dtts2">
                                                              {thongTinRap.tenCumRap} - {daDat.list.map((g,i)=>{
                                                                  if(daDat.list[i+1]){
                                                                      return `${g.viTriGhe}, `
                                                                  }
                                                                  else{
                                                                  return `${g.viTriGhe}`
                                                                  }
                                                              })}
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="st_cherity_section float_left">
                                                        <div className="st_cherity_img float_left">
                                                            <img src={`https://image.tmdb.org/t/p/w780///6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg`} alt="img" />
                                                        </div>
                                                        <div className="st_cherity_img_cont float_left">
                                                            <div className="box">
                                                                <p className="cc_pc_color1">
                                                                    <input style={{ color: "black", width: "100%" }} type="textarea" id="c201" name="maGiamGia" placeholder="Have Promo Code? Enter here" disabled={this.state.disabled} ref={el => this.codeValue = el} />
                                                                    <div className="st_cherity_btn float_left">
                                                                        <a></a>
                                                                        <li><a onClick={this.handleCheck}><i className="flaticon-tickets" /> &nbsp;Check</a></li>
                                                                        <a></a>
                                                                    </div>
                                                                    <input type="number" defaultValue={0} style={{ color: "black", width: "100%" }} type="textarea" id="c201" name="diemTichLuy" placeholder="Want to discount with Bonus Point? Enter here"  ref={el => this.pointsText = el} />
                                                                    <div className="st_cherity_btn float_left">
                                                                        <a></a>
                                                                        <li><a onClick={this.handleUsePoints}><i className="flaticon-tickets" /> &nbsp;Evaluate</a></li>
                                                                        <li><p style={{color:'black'}}>You will have: {points} points remain</p></li>
                                                                        <a></a>
                                                                    </div>
                                                                    <div className="st_cherity_btn float_left">
                                                                        <h3>SELECT EXTRA SERVICE</h3>
                                                                    </div>
                                                                    <div onChange={this.handleType.bind(this)}>
                                                                        <input type="radio" id="c202" name="loaiVe" value="0" pattern="T1 - 3DX - VANILLA" />
                                                                        <label htmlFor="c202"><span>VANILLA - NO SERVICES {tenHeThongRap} - </span>No additional charge.</label>
                                                                    </div>
                                                                    <div onChange={this.handleType.bind(this)}>
                                                                        <input type="radio" id="c2033" name="loaiVe" value=" 40000" pattern="T2 - 3DX - MAX" />
                                                                        <label htmlFor="c2033"><span>FREE REFILL ALL BEVERAGE {tenHeThongRap} - </span>Bonus 40000 Per Ticket .</label>
                                                                    </div>
                                                                    <div onChange={this.handleType.bind(this)}>
                                                                        <input type="radio" id="c203" name="loaiVe" value="50000" pattern="T3 - 4DX - MAX" />
                                                                        <label htmlFor="c203"><span>ADD CHEESE FLAVORS TO ALL POPCORN BAGS {tenHeThongRap} - </span>Bonus 50000 Per Ticket .</label>
                                                                    </div>
                                                                </p></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="st_cherity_btn float_left">
                                                        <h3 className="navigation">NAVIGATION</h3>
                                                        <ul>
                                                            <li><Map tenrap={"CGV"} special={this.state.special} />
                                                            </li>
                                                            <li><Link onClick={() => this.props.history.push(`/details/project/movie/${details.maPhim}`)} ><i className="flaticon-tickets" /> &nbsp;Box office Pickup </Link>
                                                            </li>
                                                            <li><button className={this.state.pay ? "special3" : "special2"} disabled={this.state.special === false} onClick={this.handleThem}>Proceed to Pay </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {this.state.pay === true ? <CreditCardProject
                                                        history={this.props}
                                                        itemDetails={details}
                                                        tenPhim={details.tenPhim}
                                                        ngayChieu={ngayChieu}
                                                        gioChieu={gioChieu}
                                                        pointsUsed={pointsUsed}
                                                        isBirthday={isBirthday}
                                                        listGhe={daDat}
                                                        maLichChieu={maLichChieu}
                                                        tenrap={thongTinRap.tenCumRap}
                                                        method={this.state.method} handleMethod={this.handleMethod}
                                                        type={this.state.type}
                                                        sum={sum}
                                                        giaVe={giaVe}
                                                        promise={this.state.promise}
                                                        giamGia={phanGiam}
                                                        pay={this.props.pay}
                                                        credit={this.state.credit}
                                                        count={numberOfTicket} /> : ""}
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
                                                            <li> {thongTinRap.tenCumRap} - {daDat.list.map((g,i)=>{
                                                                  if(daDat.list[i+1]){
                                                                      return `${g.viTriGhe}, `
                                                                  }
                                                                  else{
                                                                  return `${g.viTriGhe}`
                                                                  }
                                                              })}
                                                            {/* {this.props.history.location.state.viTri.map((item, index) => {
                                                                while (index < this.props.history.location.state.viTri.length - 1) {

                                                                    return (item + ",")
                                                                }
                                                                if (index = this.props.history.location.state.viTri.length)
                                                                    return (item)
                                                            })} */}
                                                                <br />{`${numberOfNormalTicket} ${numberOfNormalTicket > 1 ? "tickets" : "ticket"} - ${giaVe} each `} 
                                                                <br /> <span>{giaVe*numberOfNormalTicket}</span>
                                                                <br />{`${numberOfVipTicket} VIP ${numberOfVipTicket > 1 ? "tickets" : "ticket"} - ${giaVe *(50/100)} each `} 
                                                                <br /> <span>{giaVe*(50/100)*numberOfVipTicket}</span>
                                                            </li>
                                                            <li>Other fees <span></span>
                                                            </li>
                                                        </ul>
                                                        <p>Discount Code <span><bold>-</bold> {phanGiam} </span>
                                                        </p>
                                                        <p>{this.state.type} <span>{`${numberOfTicket * this.state.choose} VNĐ`}</span>
                                                        </p>
                                                        <p>Points applied <span>{`${pointsUsed * 10} VNĐ`}</span>
                                                        </p>
                                                        {isBirthday && (
                                                             <p>Birthday 10% discount <span>{`${birthdayDiscount} VNĐ`}</span>
                                                             </p>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="st_dtts_sb_h2 float_left">
                                                        <h3>  Sub total <span> {other} VNĐ</span></h3>
                                                        <h4>Current City is <span>Ho Chi Minh</span></h4>
                                                        <h5>Payable Amount <span>{sum} VNĐ</span></h5>
                                                    </div>
                                                    {isBirthday &&(<div style={{backgroundColor:'green'}} className="st_dtts_bs_heading float_left">
                                                        <p>IT'S YOUR BIRTHDAY MONTH - 10% DISCOUNT ON TOTAL SEAT PRICE</p>
                                                    </div>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >

                </Fragment>
            )
        }
        else { return (<PageNotFound />) }
    }
}
export default withRouter(Payment)