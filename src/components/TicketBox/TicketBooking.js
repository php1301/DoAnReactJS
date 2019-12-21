import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class TicketBooking extends Component {
    render() {
        return (
            <Fragment>
                {/* <Link to={{ pathname: '/', state: { tenrap: this.props.tenrap, timeset: this.props.timeset, items: this.props.items, itemDetails: this.props.itemDetails } }}><button className="btn btn-default omb-primary pull-right" id="reserve-seats" type="button" data-info="{&quot;user_id&quot;:1368,&quot;movie_id&quot;:&quot;688&quot;,&quot;movie_title&quot;:&quot;The Hateful Eight&quot;,&quot;date&quot;:&quot;1576582200&quot;}">Make Reservation</button></Link> */}
                <Link to={{ pathname: `/details/movie/${this.props.itemDetails.id}/payment`, state: { count: this.props.count, viTri: this.props.viTri, tenrap: this.props.tenrap, timeset: this.props.timeset, items: this.props.items, itemDetails: this.props.itemDetails } }} > 
                <button disabled={this.props.count > 0 ? false : true} className="btn btn-default omb-primary pull-right" id="reserve-seats" type="button" data-info="{&quot;user_id&quot;:1368,&quot;movie_id&quot;:&quot;688&quot;,&quot;movie_title&quot;:&quot;The Hateful Eight&quot;,&quot;date&quot;:&quot;1576582200&quot;}">Make Reservation</button></Link>
            </Fragment>
        )
    }
}
