import React, { Component, Fragment } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/lib/styles.scss"
import '../Payment/CreditCard.scss'
import firestore from "../../firestore"
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './util';

export default class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.callSetState = this.callSetState.bind(this);
    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      issuer: '',
      focused: '',
      formData: null,
      id: null
    };
  }

  componentDidUpdate() {
    this.handleSubmit2()
  }
  callSetState = (data) => {
    this.setState({
      id: data,
    })
  }
  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };
  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };
  reduceData = async (e) => {
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});
    return formData;

  }
  reduceID = async () => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const id = db.collection("payment").doc().id
    console.log(id)
    return id
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = await this.reduceData(e);

    this.setState({ formData: formData });
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("payment").add({
      tenPhim: this.props.tenPhim,
      ngayChieu: this.props.ngayChieu,
      gioChieu: this.props.gioChieu,
      tenap: this.props.tenrap,
      listGhe: this.props.listGhe,
      type: this.props.type,
      sum: this.props.sum,
      formData: this.state.formData
    });
  };
  handleSubmit2 = async () => {
    const objViTri = {
      cvc: "Promise",
      expiry: "Promise",
      name: "Promise",
      number: "Promise",
      issuer: "Promise",
    }
    const db = firebase.firestore();
    const id = await this.reduceID()
    // this.setState({ formData: objViTri, id}, console.log(" State id" + this.state.id));
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("payment").add({
      tenPhim: this.props.tenPhim,
      ngayChieu: this.props.ngayChieu,
      gioChieu: this.props.gioChieu,
      tenrap: this.props.tenrap,
      listGhe: this.props.listGhe,
      type: this.props.type,
      sum: this.props.sum,
      formData: objViTri
    })
      .then(docRef => {
        this.callSetState(docRef.id)
        console.log("Document written with ID: ", docRef.id, this.state.id);
      });
    console.log(this.state.id)
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    console.log(this.props)
    return (
      <Fragment>
        {<div className="st_dtts_ineer_box float_left">
          <div className="st_cherity_btn float_left">
            <h3 >SELECT PAYMENT METHOD</h3>
          </div>
          <div onChange={this.props.handleMethod.bind(this)} >
            <input type="radio" id="c3023" name="cb2" value="promise" />
            <label htmlFor="c3023"><span>Promise You will pay </span></label>
            <Link onClick={() => { this.props.history.history.push(`/details/movie/${this.props.itemDetails.id}/payment/${this.state.id}`) }} to={{
              // pathname: `/details/movie/${this.props.itemDetails.id}/payment/${this.state.id}`,
              state: {
                id: this.state.id,
                itemDetails: this.props.itemDetails, count: this.props.count, tenPhim: this.props.tenPhim,
                ngayChieu: this.props.ngayChieu,
                gioChieu: this.props.gioChieu,
                tenrap: this.props.tenrap,
                listGhe: this.props.listGhe,
                type: this.props.type,
                sum: this.props.sum,
              }
            }}><button onClick={this.handleSubmit2} disabled={this.props.promise ? false : true} className={this.props.promise ? "btn btn-primary btn-block btn-pay" : "btn-pay-none"}>YEEZY</button></Link>
            {/* <button onClick={this.handleSubmit2} disabled={this.props.promise ? false : true} className={this.props.promise ? "btn btn-primary btn-block btn-pay" : "btn-pay-none"}>YEEZY</button> */}
            {/* {this.renderButton} */}
          </div>
          <div onChange={this.props.handleMethod.bind(this)} >
            <input type="radio" id="c3024" name="cb2" value="form" />
            <label htmlFor="c3024"><span>Or enter your credit card below </span></label>
          </div>
          {this.props.credit === true ? (
            <div key="Payment">
              <div className="App-payment">
                <h1>React Credit Cards</h1>
                <h4>Beautiful credit cards for your payment forms</h4>
                <Cards
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focused}
                  callback={this.handleCallback}
                />
                <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="number"
                      className="form-control"
                      placeholder="Card Number"
                      pattern="[\d| ]{16,22}"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                    <small>E.g.: 49..., 51..., 36..., 37...</small>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                    />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="tel"
                        name="expiry"
                        className="form-control"
                        placeholder="Valid Thru"
                        pattern="\d\d/\d\d"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        name="cvc"
                        className="form-control"
                        placeholder="CVC"
                        pattern="\d{3,4}"
                        required
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                      />
                    </div>
                  </div>
                  <input type="hidden" name="issuer" value={issuer} />
                  <div className="form-actions">
                    <Link to={{
                      pathname: `/details/movie/${this.props.itemDetails.id}/payment/${this.state.id}`,
                      state: {
                        itemDetails: this.props.itemDetails, count: this.props.count, tenPhim: this.props.tenPhim,
                        ngayChieu: this.props.ngayChieu,
                        gioChieu: this.props.gioChieu,
                        tenrap: this.props.tenrap,
                        listGhe: this.props.listGhe,
                        type: this.props.type,
                        sum: this.props.sum,
                        id: this.state.id
                      }
                    }}><button className="btn btn-primary btn-block btn-pay">PAY</button></Link>
                  </div>
                </form>
                {formData && (
                  <div className="App-highlight">
                    {formatFormData(formData).map((d, i) => <div key={i}>{d}</div>)}
                  </div>
                )}
                <hr style={{ margin: '60px 0 30px' }} />
              </div>

            </div>
          ) : ""
          }
        </div>
        }
      </Fragment>
    );
  }
}