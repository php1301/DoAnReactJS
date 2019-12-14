
import React, { useState, Fragment } from 'react'

export default function Seats(props) {
    const [on, setOn] = useState(props.daDat)
    const handleOn = () => { if (on === false) { console.log("you click " + props.alpha + props.item); return (setOn(!on), props.handleCount(1)) } else { return (setOn(!on), props.handleCount(-1)) } }
    return (
        <Fragment>
            <li onClick={handleOn} className={on ? 'omb-taken omb-check' : 'omb-available'} style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>{props.item}</li>
        </Fragment >
    )
}
