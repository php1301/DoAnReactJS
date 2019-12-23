import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import * as action from "../../actions/ticketActions/getTimes";
import '../Stuff/css/style.min.css'
import '../Stuff/css/responsive.min.css'
import '../Stuff/Stuff.scss'
import Example from '../Modal/Modal';
class Time extends Component {
    formatTime = dateToday => {
        let date = new Date(`${dateToday}`);
        return date.getHours() + ':' + date.getMinutes()

    }
    
    renderTimes = id => {
        let today = new Date();
        const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
        const month = formatter.format(new Date());
        this.props.onSaveTimes(id)
        return this.props.times && this.props.times.length > 0 && this.props.times.map((item, index) => {
            let date = `${month}` + ' ' + `${today.getDate() + index}` + ', ' + today.getFullYear();
            let timeset1 = this.props.timeset
            
            if ( this.props.rap1 - index > 0)
                return (
                    <Fragment>
                    <Example pass={this.props.pass}tenrap={this.props.tenrap} timeset={this.props.timeset} date={date} itemDetails={this.props.itemDetails} seats={this.props.seats} items={this.formatTime(item.ngayChieuGioChieu)} />
                    </Fragment>
                )
            if ( this.props.rap2 - index > 0)
                return (
                    <Fragment>
                    <Example pass={this.props.pass} tenrap={this.props.tenrap} timeset={this.props.timeset} date={date} itemDetails={this.props.itemDetails} seats={this.props.seats} items={this.formatTime(item.ngayChieuGioChieu)} />
                    </Fragment>
                )
            if ( this.props.rap3 - index > 0)
                return (
                    <Fragment>
                    <Example pass={this.props.pass} tenrap={this.props.tenrap} timeset={this.props.timeset} date={date} itemDetails={this.props.itemDetails} seats={this.props.seats} items={this.formatTime(item.ngayChieuGioChieu)} />
                    </Fragment>
                )
            // if (index <= 6)
            //     return (
            //         <Fragment>
            //         <Example rap={rap2}timeset={this.props.timeset} date={date} itemDetails={this.props.itemDetails} seats={this.props.seats} items={this.formatTime(item.ngayChieuGioChieu)} />
            //         </Fragment>
            //     )
            // if (index <= 10)
            //     return (
            //         <Fragment>
            //         <Example rap={rap3}timeset={this.props.timeset} date={date} itemDetails={this.props.itemDetails} seats={this.props.seats} items={this.formatTime(item.ngayChieuGioChieu)} />
            //         </Fragment>
            //     )
        })
    }
    render() {
        return (
            <Fragment>
                {this.renderTimes(this.props.id)}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        times: state.getTimes.result.lichChieu,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveTimes: (id) => {
            dispatch(action.getTimesAPI(id))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Time)