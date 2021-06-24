/* eslint-disable react/prop-types */
import { data } from 'jquery'
import React, { useState, Fragment, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import cookie from 'js-cookie'
import '../TicketBox/TicketBox.scss'



const PaymentDetails = (props) => {
    const formatTime = dateToday => {
        const date = new Date(dateToday)
        const options = {
            hour: 'numeric', minute: 'numeric',
            hour12: false,
          };
          const formatter = new Intl.DateTimeFormat('en', options);
          const res = formatter.format(date);
          return res

    }

    const formatDate = (num) => {
        const date = new Date(num)
        const res = date.toISOString().substring(0, 10)
        return res
    }
    const [dataVe, setDataVe] = useState(null)
    const [phim, setPhim] = useState(null)
    let location = useLocation()
    const maVe = location.pathname.split('/')[6]
    const request = {
        fields: {
          maVe: true,
          ngayDat: true,
          giaVe: true,
          maLichChieu: true,
          loaiVe: true,
          hinhAnh: true,
          taiKhoan: true,
          khuyenMai: true,
        },
        include: [
          {
            relation: 'veLichChieu',
            scope: {
              fields: {
                maLichChieu: true,
                ngayChieuGioChieu: true,
                maPhim: true,
                maRap: true,
              },
              include: [
                {
                  relation: 'lichChieuRap',
                  scope: {
                    fields: {
                      maRap: true,
                      tenRap: true,
                      maCumRap: true,
                    },
                    include: [
                      {
                        relation: 'rap_cumRap',
                        scope: {
                          fields: {
                            maCumRap: true,
                            tenCumRap: true,
                          },
                        },
                      },
                    ],
                  },
                }
              ],
            },
          },{
              relation:'veDatVeGhe'
          }
        ],
      };
      
    const api = cookie.get('api');    
    useEffect(async ()=>{
    const data = await fetch(`${api || 'http://localhost:3001'}/ve/${maVe}?filter=${JSON.stringify(request)}`)
    const content = await data.json();
    setDataVe(content)
    const dataPhim = await fetch(`${api || 'http://localhost:3001'}/phim/${content.veLichChieu.maPhim}`)
    const contentPhim = await dataPhim.json()
    setPhim(contentPhim);
        return () =>{
            console.log("Fetched")
        }
    },[])
    return dataVe && phim ? (
            <Fragment>
                <div className="st_bcc_main_main_wrapper float_left">
                    <div className="st_bcc_main_wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="st_bcc_heading_wrapper float_left">	<i className="fa fa-check-circle" />
                                        <h3>Payment of <span>{dataVe.giaVe + " VNĐ"}</span> Complete successfull</h3>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="st_bcc_ticket_boxes_wrapper float_left">
                                        <div className="st_bcc_tecket_top_hesder float_left">
                                            <p>Your Booking is Confirmed!</p>	<span>Booking ID {maVe} </span>
                                            <span>{` ${dataVe.khuyenMai}`}</span>
                                        </div>
                                        <div className="st_bcc_tecket_bottom_hesder float_left">
                                            <div className="st_bcc_tecket_bottom_left_wrapper">
                                                <div className="st_bcc_tecket_bottom_inner_left">
                                                    <div className="st_bcc_teckt_bot_inner_img">
                                                        <img src={dataVe.hinhAnh} alt="img" />
                                                    </div>
                                                    <div className="st_bcc_teckt_bot_inner_img_cont">
                                                        <h4>{phim.tenPhim || "ok"}</h4>
                                                        <h5>{dataVe.loaiVe + " Ticket type"}</h5>
                                                        <h3>{formatDate(dataVe.veLichChieu.ngayChieuGioChieu)} | {formatTime(dataVe.veLichChieu.ngayChieuGioChieu)}</h3>
                                                        <h6>Carnival: Artech Central Mall,<br />
                                                            {dataVe.veLichChieu.lichChieuRap.rap_cumRap.tenCumRap}</h6>
                                                    </div>
                                                    <div className="st_purchase_img">
                                                        <img src="http://www.webstrot.com/html/moviepro/html/images/content/pur2.png" alt="img" />
                                                    </div>
                                                </div>
                                                <div className="st_bcc_tecket_bottom_inner_right">
                                                    <h3>{dataVe.veDatVeGhe.length > 1 ? dataVe.veDatVeGhe.length  + " TICKETS" : dataVe.veDatVeGhe.length  + " TICKET"} <br />
                                                        <span>{dataVe.veLichChieu.lichChieuRap.tenRap} - {dataVe.veDatVeGhe.map((item, index) => {
                                                            if (dataVe.veDatVeGhe[index+1])
                                                                return item.tenGhe + ", "
                                                            else
                                                                return item.tenGhe
                                                        })}</span></h3>
                                                </div>
                                            </div>
                                            <div className="st_bcc_tecket_bottom_right_wrapper">
                                                <img src={dataVe.hinhAnh} alt="img" />
                                                <h4>Booking ID<br />{maVe}</h4>
                                            </div>
                                            <div className="st_bcc_tecket_bottom_left_price_wrapper">
                                                <h4>Total Amount</h4>
                                                <h5>{dataVe.giaVe + "VNĐ"}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="st_bcc_ticket_boxes_bottom_wrapper float_left">
                                        <p>You can access your ticket from your Profile. We will send you
              <br />an e-Mail/SMS Confirmation within 5 Minutes.</p>
                                        <ul>
                                            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/dioxittdn.phucprobb/">INVITE FRIENDS</a>
                                            </li>
                                            <li><a href="/">Homepage</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        ): (<div>Loading</div>)}
export default PaymentDetails