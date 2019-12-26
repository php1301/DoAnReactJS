import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from "../../actions/ticketActions/getTimes";
const arrDate = [1, 2, 3, 4, 5, 6]
class Schedule extends Component {
  componentDidMount() {
  }
  renderNav = () => {

    var today = new Date();
    const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
    const month = formatter.format(new Date());

    return arrDate && arrDate.map((item, index) => {
      var date = `${month}` + ' ' + `${today.getDate() + index}` + ', ' + today.getFullYear();
      if (index === 0)
        return (
          <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575763200" className="btn btn-default omb-secondary">{date}</a>
        )
      else
        return (
          <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575763200" className="btn btn-default omb-primary">{date}</a>
        )
    })
  }
  formatTime = dateToday => {
    let date = new Date(`${dateToday}`);
    return date.getHours() + ':' + date.getMinutes()

  }
  renderTimes = id => {

    this.props.onSaveTimes(id)
    return this.props.times && this.props.times.length > 0 && this.props.times.map((item, index) => {
      if (index <= 5)
        return (
          <li><a href="http://demo.aa-team.com/tf/omb/my-account/?ref=http%3A%2F%2Fdemo.aa-team.com%2Ftf%2Fomb%2Fschedule%2F" className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1472}}">{this.formatTime(item.ngayChieuGioChieu)}</a></li>
        )
    })
  }
  renderDetailsSchedule = () => {
    return this.props.itemDetails && this.props.itemDetails.map((item, index) => {
      return (
        <div>
          <h5><a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" rel="bookmark">{item.original_title}</a></h5>
          <ul className="omb-movie-stats">
            <li className="omb-movie-rating mi-icon mi-icon-users5">{item.overview}</li>
            <li className="omb-movie-type mi-icon mi-icon-glasses-3d">5D</li>
            <li className="omb-movie-duration mi-icon mi-icon-clock">124 min</li>
          </ul>
          <div className="omb-movie-synopsis">
            <strong>synopsis</strong>
            {item.moTa}</div>
          <a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" className="btn btn-default omb-primary">More details</a>
          <div className="omb-note">Note: click on the desired hour from your favourite cinema / theater to book the movie!</div>
        </div>
      )
    }
    )
  }
  renderSchedule = () => {
    return this.props.item && this.props.item.map((item, index) => {
      if (index <= 5)
        return (
          <div className="row">
            <div>
              <h5><a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" rel="bookmark">{item.tenPhim}</a></h5>
              <ul className="omb-movie-stats">
                <li className="omb-movie-rating mi-icon mi-icon-users5">{item.danhGia}</li>
                <li className="omb-movie-type mi-icon mi-icon-glasses-3d">5D</li>
                <li className="omb-movie-duration mi-icon mi-icon-clock">124 min</li>
              </ul>
              <div className="omb-movie-synopsis">
                <strong>synopsis</strong>
                {item.moTa}</div>
              <a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" className="btn btn-default omb-primary">More details</a>
              <div className="omb-note">Note: click on the desired hour from your favourite cinema / theater to book the movie!</div>
            </div>
            <div>
              <div className="omb-cinema-schedule">
                Private Hall
                <ul>
                  <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                  <li className="omb-event-over">1:00 pm</li>
                  {this.renderTimes(item.maPhim)}
                  <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li>
                </ul>
              </div>
              <div className="omb-cinema-schedule">
                The Magnum Hall
                <ul>
                  <li className="omb-event-over">11:30 am</li>
                  <li className="omb-event-over">2:30 pm</li>
                  <li className="omb-event-over">2:30 pm</li>
                  <li><a href="http://demo.aa-team.com/tf/omb/my-account/?ref=http%3A%2F%2Fdemo.aa-team.com%2Ftf%2Fomb%2Fschedule%2F" className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1949}}">7:00 pm</a></li>
                  <li><a href="http://demo.aa-team.com/tf/omb/my-account/?ref=http%3A%2F%2Fdemo.aa-team.com%2Ftf%2Fomb%2Fschedule%2F" className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1733}}">11:30 pm</a></li>
                </ul>
              </div>
              <div className="omb-cinema-schedule">
                VIP Hall
                <ul>
                  <li className="omb-event-over">2:30 pm</li>
                  <li><a href="http://demo.aa-team.com/tf/omb/my-account/?ref=http%3A%2F%2Fdemo.aa-team.com%2Ftf%2Fomb%2Fschedule%2F" className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1391}}">7:00 pm</a></li>
                  <li><a href="http://demo.aa-team.com/tf/omb/my-account/?ref=http%3A%2F%2Fdemo.aa-team.com%2Ftf%2Fomb%2Fschedule%2F" className="theatre_booking" data-lightbox="{&quot;type&quot;:&quot;ajax&quot;,&quot;action&quot;:&quot;omb_pt_event_ajax_requests&quot;,&quot;sub_action&quot;:&quot;get_hall&quot;,&quot;params&quot;:{&quot;show_movie&quot;:true,&quot;event_id&quot;:1409}}">11:30 pm</a></li>
                </ul>
              </div>							</div>
          </div>
        )
    })
  }
  render() {
    return (
      
      <section className="omb-movies-schedule-page" >
        <div className="content-wrapper container" className="wow fadeIn" data-wow-duration="3s">
          <div className="col-md-12 omb-no-sidebar">
            <div id="omb-movies-schedule" className="row">
              <h1 className="omb-title">Schedule</h1>
              <hr />
              <nav className="omb-week">
                {this.renderNav()}
                {/* <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575763200" className="btn btn-default omb-secondary">December 8, 2019</a> <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575849600" className="btn btn-default omb-primary">December 9, 2019</a> <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1575936000" className="btn btn-default omb-primary">December 10, 2019</a> <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1576022400" className="btn btn-default omb-primary">December 11, 2019</a> <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1576108800" className="btn btn-default omb-primary">December 12, 2019</a> <a href="http://demo.aa-team.com/tf/omb/schedule/?date=1576195200" className="btn btn-default omb-primary">December 13, 2019</a> */}
              </nav>
              <div className="omb-movies-schedule-list">
                <div>Venue</div>
                <div>Schedule in theatres</div>
                {this.renderSchedule()}
              </div>
              <div className="omb-lightbox" />
            </div>
          </div>
        </div>
      </section >

    )
  }
}
const mapStateToProps = state => {
  return {
    times: state.getTimes.result.lichChieu
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSaveTimes: (id) => {
      dispatch(action.getTimesAPI(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Schedule)