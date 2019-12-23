import React, { useState, setShow } from 'react'
import { Modal } from 'react-bootstrap'
import "../Modal/Modal.scss"
import TicketBox from '../TicketBox/TicketBox';
export default function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [viTri, setViTri] = useState([])
    const handleClick = () => {
        if (localStorage.getItem('uid') !== null) {
            handleShow()
        }
        else
            props.pass.history.push({ pathname: '/login', state: { redirect: true } })
    }
    return (
        <>
            <li><a onClick={handleClick} className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1472}}">{props.items}</a></li>


            <Modal show={show} onHide={handleClose} animation={false}>
                <TicketBox viTri={viTri} tenrap={props.tenrap} timeset={props.timeset} items={props.items} date={props.date} itemDetails={props.itemDetails} seats={props.seats} />
            </Modal>
        </>
    );
}

