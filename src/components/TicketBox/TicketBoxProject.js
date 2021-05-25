/* eslint-disable react/prop-types */
import React, { useState, Component, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom'
import "../TicketBox/TicketBox.scss"
import TicketBooking from './TicketBooking';
import ProjectSeatItem from '../SeatItems/ProjectSeatItem';
export default function TicketBox(props) {
    let history = useHistory()
    const {seatData, gheDaDat, details, thoiLuong, gioChieu, ngayChieu, thongTinRap, giaVe, maLichChieu, loading} = props
    const [daDat, setDat] = useState({list:[]})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  
    const gheAxis = [
        {axis: 'A'},
        {axis: 'B'},
        {axis: 'C'},
        {axis: 'D'},
        {axis: 'E'},
        {axis: 'F'},
        {axis: 'G'},
        {axis: 'H'},
        {axis: 'I'},
        {axis: 'J'},
    ]
    const handleToPayment = () =>{
        history.push(`/details/project/movie/${details.maPhim}/payment`,{
            daDat,
            details,
            thoiLuong,
            gioChieu,
            ngayChieu,
            thongTinRap,
            giaVe,
            maLichChieu,
        })
    }
    const renderSeatRow = () =>{
       const gheRender =  gheAxis.map(g=>{
           return( <li key={g.axis}>
            <ul>
                <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>{g.axis}</li>
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
            {seatData && seatData.length > 0 && seatData.map((s)=>{
                const indexGhe = gheDaDat.findIndex(gdd=>gdd.maGhe === s.maGhe)
                if(s.tenGhe.slice(0,1) === g.axis){
                    return <ProjectSeatItem maGhe={s.maGhe} maLoaiGhe={s.maLoaiGhe} key={s.maGhe} daDat={daDat} setDat={setDat} viTriGhe={s.tenGhe} tenGhe={s.tenGhe.slice(1)} indexGhe={indexGhe}/>
            }
            })}
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>{g.axis}</li>
            </ul>
        </li>);
        })
        return gheRender
    }
    // {if(s[index+1] && s[index+1].tenGhe.slice(0,1) !== s[index].tenGhe.slice(0,1))}

    return loading ? <CircularProgress /> : (
        <div show={show} id="omb-lightbox-content-wrapper" style={{ padding: 0, width: 1200, height: 'auto' }}><div className="modal omb-lightbox-header">
        <h4 className="title">Reserve your ticket</h4>
        <a href="#" id="omb-lightbox-close"><i className="fa fa-times" /></a></div>
        <div id="omb-lightbox-content"><div className="hall_wrapper">
            <div className="col-left"><img src={details.hinhAnh} alt="The Hateful Eight" className="trailer-poster" />
        <h6 className="title">{details.tenPhim}</h6>
        <span className="type">
        <a href="http://demo.aa-team.com/tf/omb/genre/drama/" rel="tag">{`${thongTinRap.tenCumRap} - ${thongTinRap.tenRap}`}</a>,
        {/* {props.itemDetails.genres.map((item, index) => {
            if (index + 1 < props.itemDetails.genres.length)
                return <a rel="tag">{item.name + ", "}</a>
            else return <a rel="tag">{item.name}</a>
        })}  */}
        </span><span className="event-date"><p>{gioChieu}</p><p>{ngayChieu}</p></span><span className="running-time"><i className="mi-icon mi-icon-clock" /> {thoiLuong || 120} min</span></div>
        <div className="col-right"><div id="theatre_hall_map-1333" data-map="[{&quot;name&quot;:&quot;A&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,&quot;6#taken&quot;,&quot;7#taken&quot;,&quot;8#taken&quot;,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;B&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,&quot;3#taken&quot;,&quot;4#taken&quot;,&quot;5#taken&quot;,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;C&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;d&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;e&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,&quot;5#taken&quot;,&quot;6#taken&quot;,&quot;7#taken&quot;,&quot;8#taken&quot;,&quot;9#taken&quot;,&quot;10#taken&quot;,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;f&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,&quot;11#taken&quot;,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;g&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,&quot;6#taken&quot;,&quot;7#taken&quot;,&quot;8#taken&quot;,&quot;9#taken&quot;,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;h&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]}]" className="omb-theatre">
            <div className="omb-screen">
                <div className="omb-scren-shadow">
                </div>
            </div>
            <div className="omb-theatre-map">
            <ul className="omb-hall">
               {loading ? <div>Loading....</div> : renderSeatRow()}
            </ul>
            </div>
            <ul className="omb-theatre-legend">
                <li className="omb-available">Available seat</li>
                <li className="omb-taken">Reserved seat</li>
                <li className="omb-reserved">Your seat</li>
                <li className="">-V - VIP Seat</li>
            </ul>
            <hr />
            <div className="omb-theatre-seats-selection">
                {daDat && daDat.list.length > 0 && daDat.list.map(i=>
                i.viTriGhe + " "
                )}
                {/* <TicketBooking count={count} viTri={props.viTri} timeset={props.timeset} items={props.items} itemDetails={props.itemDetails} tenrap={props.tenrap} /> */}
                <a href="" id="booking-close" onClick={handleClose} className="btn btn-default omb-primary pull-right omb-lightbox-close">Close</a>
                <button
                onClick={handleToPayment}
                className="btn btn-default omb-primary pull-right" 
                id="reserve-seats" 
                type="button"
                data-info="{&quot;user_id&quot;:1368,&quot;movie_id&quot;:&quot;688&quot;,&quot;movie_title&quot;:&quot;The Hateful Eight&quot;,&quot;date&quot;:&quot;1576582200&quot;}">
                Make Reservation
                 </button>
                <a href="#" id="booking-back" className="btn btn-default omb-primary pull-right" data-info="{&quot;user_id&quot;:1368,&quot;movie_id&quot;:&quot;688&quot;,&quot;movie_title&quot;:&quot;The Hateful Eight&quot;,&quot;date&quot;:&quot;1576582200&quot;}">Back</a>
                <span id="reservation-info">{daDat.list.length === 1 || daDat.list.length === 0 ? daDat.list.length + " Ticket" : daDat.list.length + " Tickets"} </span>
            </div>
        </div>
            </div></div></div></div>

    )
}
