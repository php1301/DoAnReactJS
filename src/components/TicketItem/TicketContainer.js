import React, { Component } from 'react'
import TicketItem from './TicketItem'
import Title from '../Title/Title'

export default class TicketContainer extends Component {
    render() {
        return (
            <div className="wow fadeIn" data-wow-duration="3s">
                <TicketItem renderItem={this.props.renderItem} />
            </div>
        )
    }
}
