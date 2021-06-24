import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import * as action from "../../actions/ticketActions/getTimes";
import * as action2 from "../../actions/ticketActions/getMovies";
import '../Stuff/css/style.min.css'
import '../Stuff/css/responsive.min.css'
import '../Stuff/Stuff.scss'
import Example from '../Modal/ModalProject';
const arrDate = [1, 2, 3, 4, 5]
class ScheduleDetails extends Component {
    // componentDidMount() {
    //     this.props.onSaveMovies()
    // }
    formatTime = dateToday => {
        const date = new Date(dateToday)
        const options = {
            hour: 'numeric', minute: 'numeric',
            hour12: false,
          };
          const formatter = new Intl.DateTimeFormat('en', options);
          const res = formatter.format(date);
          return res

    }

    renderTimeset = (num) => {
        const date = new Date(num)
        const res = date.toISOString().substring(0, 10)
        return res
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
        console.log("run")
        const ngayChieu = [...new Set(this.props.lichChieu.map(i=>this.renderTimeset(i.ngayChieuGioChieu)))]
        const scheduleMerge = []
        ngayChieu.length > 0 && ngayChieu.map(i=>{
            const data = {
                ngayChieu: i,
                cgv: [],
                bhd: [],
                cinestar: [],
                megags: [],
            }
            scheduleMerge.push(data)   
        })
         this.props.lichChieu && this.props.lichChieu.map((item)=>{
             const index = scheduleMerge.findIndex(i=>i.ngayChieu === this.renderTimeset(item.ngayChieuGioChieu))
             const infoDate = {
                gioChieu:this.formatTime(item.ngayChieuGioChieu),
                maLichChieu: item.maLichChieu,
                maRap: item.maRap,
                thoiLuong: item.thoiLuong,
                giaVe: item.giaVe
           }
             switch (item.maHeThongRap) {
                 case "BHDStar":
                     scheduleMerge[index].bhd.push(infoDate)
                     break;
                 case "CGV":
                     scheduleMerge[index].cgv.push(infoDate)
                     break;
                 case "CineStar":
                     scheduleMerge[index].cinestar.push(infoDate)
                     break;
                 case "MegaGS":
                     scheduleMerge[index].megags.push(infoDate)
                     break;
                 default:
                     break;
             }
         })
        //  console.log(scheduleMerge)
        //  const requestGheDaDat = {
        //     where: {
        //         maLichChieu: 30
        //     }
        // }
        // console.log(`http://localhost:3001/ghe-da-dat?filter=${JSON.stringify(requestGheDaDat)}`)
        return scheduleMerge && scheduleMerge.sort((a, b)=> new Date(a.ngayChieu) - new Date(b.ngayChieu)).map((item) => {
            // let timeset1 = this.renderTimeset(0)
            // let timeset2 = this.renderTimeset(1)
            // let timeset3 = this.renderTimeset(2)
            // let rap1 = this.renderRap("CGV")
            // let rap2 = this.renderRap("BHD Star Cineplex")
            // let rap3 = this.renderRap("Cinestar")
            // let tenrap1 = "CGV"
            // let tenrap2 = "BHD Star Cineplex"
            // let tenrap3 = "Cinestar"
                return (
                    <Fragment>
                        <div classname="wrapper">
                            <div className="omb-cinema-schedule">
                                <h2>{item.ngayChieu}</h2>
                                <ul>
                                    <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cgv.png"></img>                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                    {/* <Time pass={this.props.pass} rap1={rap1} tenrap={tenrap1} seats={this.props.seats} timeset={timeset1} id={item.maPhim} itemDetails={this.props.itemDetails} /> */}
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                                    {item.cgv.sort((a, b)=> new Date(`1/1/1999 ${a.gioChieu}:00`) - new Date(`1/1/1999 ${b.gioChieu}:00`)).map(v=>{
                                    return <Example giaVe={v.giaVe} ngayChieu={item.ngayChieu} thoiLuong={v.thoiLuong} details={this.props.itemDetails} maRap={v.maRap} maLichChieu={v.maLichChieu} gioChieu={v.gioChieu} genres={this.props.genres}/>
                                })}
                                    
                                </ul>
                                <ul>
                                    <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/bhd.png"></img>
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                    {/* <Time pass={this.props.pass} rap2={rap2} tenrap={tenrap2} seats={this.props.seats} timeset={timeset1} id={item.maPhim} itemDetails={this.props.itemDetails} /> */}
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                                    {item.bhd.sort((a, b)=> new Date(`1/1/1999 ${a.gioChieu}:00`) - new Date(`1/1/1999 ${b.gioChieu}:00`)).map(v=>{
                                    return <Example giaVe={v.giaVe} ngayChieu={item.ngayChieu} thoiLuong={v.thoiLuong} details={this.props.itemDetails} maRap={v.maRap} maLichChieu={v.maLichChieu} gioChieu={v.gioChieu} genres={this.props.genres} />
                                    })}
                                </ul>genres={this.props.genres}
                                <ul>
                                    {/* <h3>{tenrap3}<img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cgv.png"></img></h3> */}
                                    <img className="iconConnect" src="https://123phim.vn/app/assets/img/icons/cinestar.png"></img>
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 am</li>
                                    <li className="omb-event-over">1:00 pm</li> */}
                                    {/* <Time pass={this.props.pass} rap3={rap3} tenrap={tenrap3} seats={this.props.seats} timeset={timeset1} id={item.maPhim} itemDetails={this.props.itemDetails} /> */}
                                    {/* <li className="omb-sold-out"><span>Sold Out</span>11:30 pm</li> */}
                                    {item.cinestar.sort((a, b)=> new Date(`1/1/1999 ${a.gioChieu}:00`) - new Date(`1/1/1999 ${b.gioChieu}:00`)).map(v=>{
                                    return <Example giaVe={v.giaVe} ngayChieu={item.ngayChieu} thoiLuong={v.thoiLuong} details={this.props.itemDetails} maRap={v.maRap} maLichChieu={v.maLichChieu} gioChieu={v.gioChieu} genres={this.props.genres} />
                                })}
                                </ul>
                            </div>
                        </div>
                    </Fragment>
                )
        })
    }
    render() {
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
                                        <h5><a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" rel="bookmark">{this.props.itemDetails.tenPhim}</a></h5>
                                        <ul className="omb-movie-stats">
                                            <li className="omb-movie-rating mi-icon mi-icon-users5">{this.props.itemDetails.danhGia.toFixed(1)}</li>
                                            <li className="omb-movie-type mi-icon mi-icon-glasses-3d">5D</li>
                                            <li className="omb-movie-duration mi-icon mi-icon-clock">{this.props.itemDetails.thoiLuong}</li>
                                        </ul>
                                        <div className="omb-movie-synopsis">
                                            <strong>synopsis</strong>
                                            {this.props.itemDetails.moTa}</div>
                                        {/* <a href="http://demo.aa-team.com/tf/omb/movies/southpaw/" className="btn btn-default omb-primary">More details</a> */}
                                        <div className="omb-note">***YOU WONT BE ABLE TO SEE THE SCHEDULE IN THIS WEB HOSTING BECAUSE OF SCHEDULE's API SSL SECURITY***</div>
                                        <br />
                                        <br />
                                        <div className="omb-note">Note: click on the desired hour from your favourite cinema / theater to book the movie!</div>
                                    </div>
                                    <div>
                                        {this.props.lichChieu.length > 0 ? this.renderDetailsSchedule() : (<h2>Chưa có lịch chiếu :( </h2>)}
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