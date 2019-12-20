import React, { Component, Fragment } from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/lib/styles.scss"
import '../Payment/CreditCard.scss'
import firestore from "../../firestore"
import firebase from 'firebase'
import { withRouter } from 'react-router-dom'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from './util';
class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      name: '',
      expiry: '',
      cvc: '',
      issuer: '',
      focused: '',
      formData: null,
    };

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
  handlePostFirebase = async (data) => {
    let uid =localStorage.getItem('uid')
    const db = await firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("user").doc(uid).collection("payment").add({
      data
    })
      .then(docRef => {
        this.props.history.push({
          pathname: `/details/movie/${this.props.itemDetails.id}/payment/${docRef.id}`,
          state: {
            itemDetails: this.props.itemDetails, count: this.props.count, tenPhim: this.props.tenPhim,
            ngayChieu: this.props.ngayChieu,
            gioChieu: this.props.gioChieu,
            tenrap: this.props.tenrap,
            listGhe: this.props.listGhe,
            type: this.props.type,
            sum: this.props.sum,
            id: docRef.id.slice(1, 10)
          }
        })
      });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = await this.reduceData(e);
    this.setState({ formData: formData });
    const dataToAdd = {
      tenPhim: this.props.tenPhim,
      ngayChieu: this.props.ngayChieu,
      gioChieu: this.props.gioChieu,
      tenrap: this.props.tenrap,
      listGhe: this.props.listGhe,
      type: this.props.type,
      sum: this.props.sum,
      formData: this.state.formData
    }
    this.handlePostFirebase(dataToAdd)
  };
  handleSubmit2 = () => {
    const objViTri = {
      cvc: "Promise",
      expiry: "Promise",
      name: "Promise",
      number: "Promise",
      issuer: "Promise",
    }
    const dataToAdd = {
      tenPhim: this.props.tenPhim,
      ngayChieu: this.props.ngayChieu,
      gioChieu: this.props.gioChieu,
      tenrap: this.props.tenrap,
      listGhe: this.props.listGhe,
      type: this.props.type,
      sum: this.props.sum,
      formData: objViTri
    }
    this.handlePostFirebase(dataToAdd)
    this.setState({ formData: objViTri });

  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <Fragment>
        {<div className="st_dtts_ineer_box float_left">
          <div className="st_cherity_btn float_left">
            <h3 >SELECT PAYMENT METHOD</h3>
          </div>
          <div onChange={this.props.handleMethod.bind(this)} >
            <input type="radio" id="c3023" name="cb2" value="promise" />
            <label htmlFor="c3023"><span>Promise You will pay </span></label>
            <button onClick={this.handleSubmit2} disabled={this.props.promise ? false : true} className={this.props.promise ? "btn btn-primary btn-block btn-pay" : "btn-pay-none"}>YEEZZY</button>
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
                    <button className="btn btn-primary btn-block btn-pay">PAY</button>
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
export default withRouter(CreditCard)