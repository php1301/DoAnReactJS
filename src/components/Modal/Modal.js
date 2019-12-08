import React, { useState, setShow } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import "../Modal/Modal.scss"
export default function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderTrailers = () => {
        {console.log(props.items)}
        return props.items && props.items.map((item, index) => {
            if (index > 1 && index < 3)
            return (
                <Button onClick={handleShow}>
                    <div>
                        <iframe width={560} height={315} src={`https://www.youtube.com/embed/${item.key}`}  frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <div className="overlay" src={`https://www.youtube.com/embed/${item.key}`}  data-target="#videoModal" data-toggle="modal" />
                    </div>
                </Button>
            )
        }
        )
    }

    return (
        <>
            {renderTrailers()}
            {/* <Button onClick={handleShow}>
                <div>
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/VF1Yz05iQM0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="overlay trigger" src="https://www.youtube.com/embed/VF1Yz05iQM0" data-target="#videoModal" data-toggle="modal" />
                </div>
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Body><div className="trailer-item">
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/Rc0R2VYsfD4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
      </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
