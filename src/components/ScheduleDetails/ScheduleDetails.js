import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import * as action from "../../actions/ticketActions/getTimes";
import * as action2 from "../../actions/ticketActions/getMovies";
import '../Stuff/css/style.min.css'
import '../Stuff/css/responsive.min.css'
import '../Stuff/Stuff.scss'
import TicketBox from '../TicketBox/TicketBox';
import { Modal } from 'react-bootstrap';
import Example from '../Modal/Modal';
import Time from './Time';
const arrDate = [1, 2, 3, 4, 5]
class ScheduleDetails extends Component {
    componentDidMount() {
        this.props.onSaveMovies()
    }
    formatTime = dateToday => {
        let date = new Date(`${dateToday}`);
        return date.getHours() + ':' + date.getMinutes()

    }
    // renderNav = () => {

    //     var today = new Date();
    //     const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
    //     const month = formatter.format(new Date());

    //     return arrDate && arrDate.map((item, index) => {
    //         var date = `${month}` + ' ' + `${today.getDate() + index}` + ', ' + today.getFullYear();
    //         if (index === 0)
    //             return (
    //                 <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575763200" className="btn btn-default omb-secondary">{date}</a>
    //             )
    //         else
    //             return (
    //                 <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575763200" className="btn btn-default omb-primary">{date}</a>
    //             )
    //     })
    // }
    renderTimes = id => {
        let today = new Date();
        const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
        const month = formatter.format(new Date());

        this.props.onSaveTimes(id)
        return this.props.times && this.props.times.length > 0 && this.props.times.map((item, index) => {
            let date = `${month}` + ' ' + `${today.getDate() + index}` + ', ' + today.getFullYear();
            let timeset1 = this.renderTimeset(0)

            if (index <= 5)
                return (
                    // <li><a href="#exampleModal" className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1472}}">{this.formatTime(item.ngayChieuGioChieu)}</a></li>
                    <Example timeset={timeset1} date={date} itemDetails={this.props.itemDetails} seats={this.props.seats} items={this.formatTime(item.ngayChieuGioChieu)} />
                )
        })
    }
    renderTimeset = (num) => {
        let date
        let today = new Date();
        const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
        const month = formatter.format(new Date());
        date = `${month}` + ' ' + `${today.getDate() + num}` + ', ' + today.getFullYear();
        return date
    }
    renderRap = (id) => {
        if (id === "CGV") {
            return 4
        }
        if (id === "BHD Star Cineplex") {
            return 5
        }
        if (id === "Cinestar") {
            return 3
        }
    }
    renderDetailsSchedule = () => {
        return this.props.movies && this.props.movies.map((item, index) => {
            let timeset1 = this.renderTimeset(0)
            let timeset2 = this.renderTimeset(1)
            let timeset3 = this.renderTimeset(2)
            let rap1 = this.renderRap("CGV")
            let rap2 = this.renderRap("BHD Star Cineplex")
            let rap3 = this.renderRap("Cinestar")
            let tenrap1 = "CGV"
            let tenrap2 = "BHD Star Cineplex"
            let tenrap3 = "Cinestar"
            if (index === 0)
                return (
                    <Fragment>
                        <div classname="wrapper">
                            <div className="omb-cinema-schedule">
                                <h2>{this.renderTimeset(0)}</h2>
                                <ul>
                                    <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cgv.png"></img>                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                    <Time pass={this.props.pass}rap1={rap1} tenrap={tenrap1} seats={this.props.seats} timeset={timeset1} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                                </ul>
                                <ul>
                                    <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/bhd.png"></img>
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                    <Time pass={this.props.pass}rap2={rap2} tenrap={tenrap2} seats={this.props.seats} timeset={timeset1} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                                </ul>
                                <ul>
                                    {/* <h3>{tenrap3}<img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cgv.png"></img></h3> */}
                                    <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cinestar.png"></img>
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                    <Time pass={this.props.pass}rap3={rap3} tenrap={tenrap3} seats={this.props.seats} timeset={timeset1} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                                </ul>
                            </div>
                        </div>
                    </Fragment>
                )
            if (index === 1)
                return (
                    <div classname="wrapper">
                        <div className="omb-cinema-schedule">
                            <h2>{this.renderTimeset(1)}</h2>
                            <ul>
                                <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cgv.png"></img>                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                <Time pass={this.props.pass}rap1={rap1} tenrap={tenrap1} seats={this.props.seats} timeset={timeset2} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                            </ul>
                            <ul>
                                <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/bhd.png"></img>                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                <Time pass={this.props.pass}rap2={rap2} tenrap={tenrap2} seats={this.props.seats} timeset={timeset2} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                            </ul>
                            <ul>
                                <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cinestar.png"></img>                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                <Time pass={this.props.pass}rap3={rap3} tenrap={tenrap3} seats={this.props.seats} timeset={timeset2} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                            </ul>
                        </div>
                    </div>
                )
            if (index === 2)
                return (
                    <div classname="wrapper">
                        <div className="omb-cinema-schedule">
                            <h2>{this.renderTimeset(2)}</h2>
                            <ul>
                                <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cgv.png"></img>                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                <Time pass={this.props.pass}rap1={rap1} tenrap={tenrap1} seats={this.props.seats} timeset={timeset3} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                            </ul>
                            <ul>
                                <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/bhd.png"></img>                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                <Time pass={this.props.pass}rap2={rap2} tenrap={tenrap2} seats={this.props.seats} timeset={timeset3} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                            </ul>
                            <ul>
                                <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cinestar.png"></img>                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                <Time pass={this.props.pass}rap3={rap3} tenrap={tenrap3} seats={this.props.seats} timeset={timeset3} id={item.maPhim} itemDetails={this.props.itemDetails} />
                                {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                            </ul>
                        </div>
                    </div>
                )


        })
    }
    render() {
        { this.formatTime() }
        return (
            <section className="omb-movies-schedule-page" >
                <div className="content-wrapper container" className="wow fadeIn" data-wow-duration="3s">
                    <div className="col-md-12 omb-no-sidebar">
                        <div id="omb-movies-schedule" className="row">
                            {/* <h1 className="omb-title">Schedule</h1> */}
                            <hr />
                            {/* <nav className="omb-week">
                                {this.renderNav()}
                            </nav> */}
                            <div className="omb-movies-schedule-list">
                                <div>Venue</div>
                                <div>Schedule in theatres</div>
                                <div className="row">
                                    <div>
                                        <h5><a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" rel="bookmark">{this.props.itemDetails.original_title}</a></h5>
                                        <ul className="omb-movie-stats">
                                            <li className="omb-movie-rating mi-icon mi-icon-users5">{this.props.itemDetails.rating}</li>
                                            <li className="omb-movie-type mi-icon mi-icon-glasses-3d">5D</li>
                                            <li className="omb-movie-duration mi-icon mi-icon-clock">124 min</li>
                                        </ul>
                                        <div className="omb-movie-synopsis">
                                            <strong>synopsis</strong>
                                            {this.props.itemDetails.overview}</div>
                                        {/* <a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" className="btn btn-default omb-primary">More details</a> */}
                                        <div className="omb-note">Note: click on the desired hour from your favourite cinema / theater to book the movie!</div>
                                    </div>
                                    <div>
                                        {this.renderDetailsSchedule()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
const mapStateToProps = state => {
    return {
        times: state.getTimes.result.lichChieu,
        movies: state.getMovies.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveTimes: (id) => {
            dispatch(action.getTimesAPI(id))
        },
        onSaveMovies: () => {
            dispatch(action2.getMoviesAPI())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetails)