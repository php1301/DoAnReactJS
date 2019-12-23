import React, { useState, Component, Fragment } from 'react'
import "../TicketBox/TicketBox.scss"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from "../../actions/ticketActions/getSeats"
import SeatItems from '../SeatItems/SeatItems';
import TicketBooking from './TicketBooking';
export default function TicketBox(props) {
    const [daDat, setDat] = useState(false)
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0)
    const handleClose = () => setShow(false);
    const handleCount = (x) => { return (setCount(count + x)) }
    const handleVe = (mang) => { return (props.viTri.map(item => { return (item), console.log(item) })) }
    return (
        <div show={show} id="omb-lightbox-content-wrapper" style={{ padding: 0, width: 1200, height: 'auto' }}><div className="modal omb-lightbox-header"><h4 className="title">Reserve your ticket</h4><a href="#" id="omb-lightbox-close"><i className="fa fa-times" /></a></div><div id="omb-lightbox-content"><div className="hall_wrapper"><div className="col-left"><img src={` http://image.tmdb.org/t/p/w185///${props.itemDetails.poster_path}`} alt="The Hateful Eight" className="trailer-poster" /><h6 className="title">{props.itemDetails.title}</h6><span className="type"><a href="http://demo.aa-team.com/tf/omb/genre/drama/" rel="tag">{props.tenrap}</a>,
        {props.itemDetails.genres.map((item, index) => {
            if (index + 1 < props.itemDetails.genres.length)
                return <a rel="tag">{item.name + ", "}</a>
            else return <a rel="tag">{item.name}</a>
        })} </span><span className="event-date"><p>{props.timeset}</p><p>{props.items}</p></span><span className="running-time"><i className="mi-icon mi-icon-clock" /> {props.itemDetails.runtime} min</span></div><div className="col-right"><div id="theatre_hall_map-1333" data-map="[{&quot;name&quot;:&quot;A&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,&quot;6#taken&quot;,&quot;7#taken&quot;,&quot;8#taken&quot;,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;B&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,&quot;3#taken&quot;,&quot;4#taken&quot;,&quot;5#taken&quot;,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;C&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;d&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;e&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,&quot;5#taken&quot;,&quot;6#taken&quot;,&quot;7#taken&quot;,&quot;8#taken&quot;,&quot;9#taken&quot;,&quot;10#taken&quot;,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;f&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,&quot;11#taken&quot;,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;g&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,&quot;6#taken&quot;,&quot;7#taken&quot;,&quot;8#taken&quot;,&quot;9#taken&quot;,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]},{&quot;name&quot;:&quot;h&quot;,&quot;spaces&quot;:[&quot;empty-space&quot;,&quot;empty-space&quot;,1,2,3,4,5,6,7,8,9,10,11,&quot;empty-space&quot;,&quot;empty-space&quot;]}]" className="omb-theatre">
            <div className="omb-screen">
                <div className="omb-scren-shadow">
                </div>
            </div>
            <div className="omb-theatre-map"><ul className="omb-hall">
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"A"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>B</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"B"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>B</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>C</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"C"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>C</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>D</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"D"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>D</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>E</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"E"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>E</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>F</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"F"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>F</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>G</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"G"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>G</li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>H</li>
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <SeatItems handleVe={handleVe} viTri={props.viTri} alpha={"H"} handleCount={handleCount} daDat={daDat} seats={props.seats} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>H</li>
                    </ul>
                </li>
            </ul></div>
            <ul className="omb-theatre-legend">
                <li className="omb-available">Available seat</li>
                <li className="omb-taken">Reserved seat</li>
                <li className="omb-reserved">Your seat</li>
            </ul>
            <hr />
            <div className="omb-theatre-seats-selection">
                <TicketBooking count={count} viTri={props.viTri} timeset={props.timeset} items={props.items} itemDetails={props.itemDetails} tenrap={props.tenrap} />
                <a href="" id="booking-close" onClick={handleClose} className="btn btn-default omb-primary pull-right omb-lightbox-close">Close</a>
                {/* <Link to={`/details/movie/${props.itemDetails.id}/payment`}><button className="btn btn-default omb-primary pull-right" id="reserve-seats" type="button" data-info="{&quot;user_id&quot;:1368,&quot;movie_id&quot;:&quot;688&quot;,&quot;movie_title&quot;:&quot;The Hateful Eight&quot;,&quot;date&quot;:&quot;1576582200&quot;}">Make Reservation</button></Link><a href="#" id="booking-back" className="btn btn-default omb-primary pull-right" data-info="{&quot;user_id&quot;:1368,&quot;movie_id&quot;:&quot;688&quot;,&quot;movie_title&quot;:&quot;The Hateful Eight&quot;,&quot;date&quot;:&quot;1576582200&quot;}">Back</a><a href="" id="booking-close" onClick={handleClose} className="btn btn-default omb-primary pull-right omb-lightbox-close">Close</a> */}
                <span id="reservation-info">{count === 1 || count === 0 ? count + " Ticket" : count + " Tickets"} </span>
            </div>
        </div>
            </div></div></div></div>

    )
}
