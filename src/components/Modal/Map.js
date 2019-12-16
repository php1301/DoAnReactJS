
import React, { useState, Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
export default function Map(props) {
    const [show, setShow] = useState(false);
    const [map, setMap] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const maps = (tenrap) => {
        if (tenrap === "CGV") {
            setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.690641987123!2d106.61578272359925!3d10.746402019367482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752dcec1b9cb21%3A0xc76983f1bcfd1227!2sCGV%20Aeon%20Mall%20B%C3%ACnh%20T%C3%A2n!5e0!3m2!1svi!2s!4v1576516973961!5m2!1svi!2s")
        }
        if (tenrap === "BHD Star Cineplex") {
            setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.514951715635!2d106.70222881462244!3d10.771815892324636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41479dd6e5%3A0x6322994318a1a010!2sBHD%20Star%20Cineplex!5e0!3m2!1svi!2s!4v1576518726389!5m2!1svi!2s")
        }
        if (tenrap === "Cinestar") {
            setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3764320910223!2d106.69598401462264!3d10.782453992317409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f366a781d37%3A0x1f5346650cf7ceb8!2sCinestar%20Hai%20B%C3%A0%20Tr%C6%B0ng!5e0!3m2!1svi!2s!4v1576518812017!5m2!1svi!2s")
        }
    }
    const call = () => {
        handleShow()
        maps(props.tenrap)
    }
    return (
        <>
            <a onClick={call} className={props.special === false ? " special1" : "special2"} ><i className="flaticon-tickets" />MAP</a>


            <Modal onClick={maps} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 style={{ color: "black" }}>Map for {props.tenrap}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe src={`${map}`} width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

