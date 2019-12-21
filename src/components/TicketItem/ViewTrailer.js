import React, { useState, setShow } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import "../Modal/Modal.scss"
import Trailer from '../TicketItem/Trailer';
export default function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a onClick={handleShow} >View Trailer</a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: "black" }}>{props.tenphim} Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Trailer id={props.id}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

