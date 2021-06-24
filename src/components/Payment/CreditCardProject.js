import React, { Component, Fragment } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import cookie from 'js-cookie';
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
  handleDatVe = async (data) => {
    const api = cookie.get('api');    try{
        let stringViTriGhe = ''
        const gheToPush = []
        data.listGhe.list.map((g, i)=>{
            gheToPush.push({maGhe: g.maGhe})
            if(data.listGhe.list[i+1]){
              stringViTriGhe += `${g.viTriGhe}, `
            }
            else{
              stringViTriGhe += `${g.viTriGhe}`
            }            
        })
        const request = {
            giaVe: this.props.giaVe,
            taiKhoan: parseInt(cookie.get('id')),
            loaiVe: data.type,
            giamGia: this.props.giamGia,
            ghe: gheToPush,
            hinhAnh: data.photo,
            diemTichLuySuDung: this.props.pointsUsed,
            khuyenMai: this.props.giamGia > 0 ? `Mã giảm giả coupon NOEL giảm ${this.props.giamGia} - ` : '',
            maLichChieu: this.props.maLichChieu,
        }
        const datVeContent = await fetch(`${api || 'http://localhost:3001'}/dat-ve`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request),
        })
        const datVeData = await datVeContent.json()
        if(datVeData.message){
          throw Error(datVeData.message)
        }
        const emailRequest = {
            authorEmail: cookie.get('email'),
            authorName: cookie.get('username'),
            customerName: cookie.get('username'),
            tongTien:  this.props.sum,
            viTriGhe: stringViTriGhe,
            linkHoaDon: `https://do-an-react-js.vercel.app/details/project/movie/${this.props.itemDetails.maPhim}/payment/${datVeData.ve.maVe}`,
            tenPhim: this.props.tenPhim,
            ngayChieuGioChieu: this.props.ngayChieu + " - " + this.props.gioChieu,
            tenRap: this.props.tenrap,
        }
        console.log(emailRequest)
         await fetch(`${api || 'http://localhost:3001'}/gui-email-hoa-don`,{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailRequest),
      })        
      if(datVeData.upgradeMessage.length > 0){
        toast.success(datVeData.upgradeMessage)
      }
      setTimeout(() => {
        this.props.history.replace({
          pathname: `/details/project/movie/${this.props.itemDetails.maPhim}/payment/${datVeData.ve.maVe}`,
          state: {
          maLichChieu: datVeData.maLichChieu,
          listGhe: datVeData.ghe,
          type: datVeData.ve.type,
          sum: datVeData.ve.giaVe,
          maVe: datVeData.ve.maVe
        }
      })
      }, 5000);
      
    }
    catch(e){
        console.log(e.message)
        toast.error('Đặt vé không thành công')
    }
   
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
      formData: this.state.formData,
      photo: this.props.itemDetails.hinhAnh
    }
    this.handleDatVe(dataToAdd)
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
      formData: objViTri,
      photo: this.props.itemDetails.hinhAnh
    }
    this.handleDatVe(dataToAdd)
    this.setState({ formData: objViTri });

  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <Fragment>
          <ToastContainer/>
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