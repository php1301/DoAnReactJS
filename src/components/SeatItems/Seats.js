// import React, { Fragment, Component } from 'react'

// export default class Seats extends Component {
//     render() {
//         let className = this.props.condition ? 'omb-taken' : 'omb-available';
//         return (
//             <Fragment>
//                 <li onClick={() => this.props.handleSeats(this.props.index)} className={className} style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>{this.props.item}</li>
//             </Fragment>
//         )
//     }
// }
import React, { useState, Fragment } from 'react'

export default function Seats(props) {
    const [on, setOn] = useState(props.daDat)
    
    const handleOn = () => { if (on === false) { return (setOn(!on), props.handleCount(1)) } else { return (setOn(!on), props.handleCount(-1)) } }
    return (
        <Fragment>
            <li onClick={handleOn} className={on ? 'omb-taken omb-check' : 'omb-available'} style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>{props.item}</li>
        </Fragment >
    )
}
