import React, { Component } from 'react'
import {ToastContainer} from 'react-toastify'
import "../DetailMovies/DetailMovies.scss";
import cookie from 'js-cookie'
import { NavLink } from 'react-router-dom';
// import Movies from '../Movies/Movies.js';
import PeopleCarousel from '../PeopleCarousel/PeopleCarousel';
import Trailers from '../Trailers/Trailers';
// import * as action from "../../actions/movieActions/getDetails"
import * as action2 from "../../actions/movieActions/getReviews";
import * as action3 from "../../actions/movieActions/getTrailers";
import * as action4 from "../../actions/ticketActions/getSeats"
import getMovieCredits from '../../actions/movieActions/getMovieCredits';
import getPeopleDetails from '../../actions/peopleActions/getPeopleDetails';
import getPeopleCombinedCredits from '../../actions/peopleActions/getPeopleCombinedCredits';
import { connect } from 'react-redux'
import StarRating from '../StarRating/StarRating';
import "../DetailMovies/Ticket.scss"
// import ScheduleDetails from '../ScheduleDetails/ScheduleDetails';
import ProjectScheduleDetails from '../ScheduleDetails/ProjectScheduleDetails';
import Hotline from '../Hotline/Hotline';
import Loader from '../Loader/Loader'
import Favorite from './Favorite';
class DetailMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
            details: {},
            lichChieu: [],
            theLoai: []
        }
    }

    setRating = rating => {

        rating = Math.round(rating / 2);

        document.querySelectorAll('.star-rating-container__item').forEach((node, i) => {
            if (i < rating) {
                node.classList.add("star-rating-container__item--active");
            }
        });
    };
    shortText = (str) => {
        // const strArr = str.split(' ');
        return str.split(' ').length < 50 ? str : str.split(".").splice(0, 5).join("...")  // dua chuoi thanh mang
    }
    formatDate = (str) =>{
        const date = new Date(str)
        const res = date.toISOString().substring(0, 10)
        return res
    }
    handleFetchDetails = async () =>{
        const api = cookie.get('api');        
        let projectId = this.props.match.params.id
        const data = await fetch(`${api || 'http://localhost:3001'}/phim/${projectId}`)
        const content = await data.json();
        // const dataLichChieu = await fetch(`http://[::1]:3001/phims/${projectId}/lich-chieus`)
        const dataLichChieu = await fetch(`${api || 'http://localhost:3001'}/phims/${projectId}/lich-chieus`)
        const contentLichChieu = await dataLichChieu.json()
        const dataTheLoai = await fetch(`${api || 'http://localhost:3001'}/phims/${projectId}/the-loais`)
        const contentTheLoai = await dataTheLoai.json()
        this.setState({
            details: content,
            lichChieu: contentLichChieu,
            theLoai: contentTheLoai,
        })
    }
    async componentDidMount() {
        let id = 804435
        // id == undefined 
        this.props.getPeopleDetails(`https://api.themoviedb.org/3/person/${id}?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`);
        this.props.getPeopleCombinedCredits(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`);
        this.props.getMovieCredits(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`);
        
        await this.handleFetchDetails()

        this.props.onSaveReviews(id)
        this.props.onSaveTrailers(id)
        // this.props.onSaveSeats(16016) // do xài 2 nguồn api nên không sync được id để truyền id vô lấy mã lịch chiếu được, nên cho đại 1 mã lịch chiếu -> đã nhận ra sự bất cập này và rút exp
    }
    render() {
        let { details, theLoai } = this.state
        let { reviews } = this.props
        let genres = '';
        console.log(details)
        // let genres = details.genres ? `${details.genres[0] ? details.genres[0].name : ''}` + `${details.genres[1] ? ' | ' + details.genres[1].name : ''}` : ''
        theLoai.forEach((tl, i)=>{
            if(theLoai[i+1]){
                genres+=tl.tenTheLoai.toUpperCase() + ' | '
            }
            else{
                genres+=tl.tenTheLoai.toUpperCase()
            }
        })
        return ( details.maPhim ? (<div>
                <Loader />
                <ToastContainer />
                <div className="item-details" id="item-details-top">
                    <header
                        className="item-details-header-info"
                        style={{
                            background:
                                `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original//mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg) center top no-repeat rgb(255, 255, 255)`
                        }}
                    >
                        <div className="item-details-header-info-nav">
                            <NavLink to="" onClick={() => this.props.history.push('/')}>
                                <svg
                                    className="item-details-header-info-nav__icon wow fadeInLeft"
                                    data-wow-delay=".2s"
                                    data-wow-duration="2s"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "2s",
                                        animationDelay: "0.2s",
                                        animationName: "fadeInLeft"
                                    }}
                                >
                                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                                </svg>
                            </NavLink>
                            <svg
                                className="item-details-header-info-nav__icon wow fadeInLeft"
                                data-wow-delay=".5s"
                                data-wow-duration="2s"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                onClick={this.handleShareButton}
                                style={{
                                    visibility: "visible",
                                    animationDuration: "2s",
                                    animationDelay: "0.5s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <path d="M448 248L288 96v85.334C138.666 202.667 85.333 309.334 64 416c53.333-74.666 117.333-108.802 224-108.802v87.469L448 248z" />
                            </svg>
                        </div>
                        {/* <div onClick={this.showShareButton} className={`item-details-header-info-share-buttons ${this.state.toggle ? "item-details-header-info-share-buttons__hide" : ""} `} > */}
                        <div className="item-details-header-info-share-buttons item-details-header-info-share-buttons__hide">
                            <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /> </a>
                            <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /> </a>
                            <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" /></a>
                            <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /></a>
                            <a onClick={this.handleShareButton}><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>
                        </div>
                        <div className="item-details-header-info-container">
                            <img
                                className="item-details-header-info-container-image"
                                src={details.hinhAnh}
                                alt="Terminator: Dark Fate"
                            />
                            <div className="item-details-header-info-container-content">
                                <h1 className="item-details-header-info-container-content__title">
                                    {details.tenPhim}
                                </h1>
                                <div className="item-details-header-info-container-content-rating">
                                    <p className="item-details-header-info-container-content-rating__digit">
                                        {details.danhGia.toFixed(1)}
                                    </p>
                                    <StarRating star={details.danhGia} />
                                </div>
                                <p className="item-details-header-info-container-content__detail">
                                    Released | EN - VN
                                </p>
                                <p className="item-details-header-info-container-content__detail">
                                    {this.formatDate(details.ngayKhoiChieu)}
                                </p>
                                <p className="item-details-header-info-container-content__genre">
                                    {/* {details.genres ? `${details.genres[0] ? details.genres[0].name : ''}` + `${details.genres[1] ? ' | ' + details.genres[1].name : ''}` : ''} */}
                                    {genres}
                                </p>
                                <Favorite pass={this.props} details={details} genres={genres} logInStatus={this.props.logInStatus} />
                                {/* <li><Link class="theme-btn" to={this.props.logInStatus || this.props.session.failure ? `/ticket/${this.props.match.params.id}/${this.props.match.params.idticket}` : `/login`}><i class="icofont icofont-ticket"></i> Tickets</Link></li> */}
                            </div>
                        </div>
                        <div className="item-details-header-info-container-account-warning item-details-header-info-container-account-warning--hide">
                            <p>Use a Facebook account to use this feature</p>
                        </div>
                    </header>
                    <main className="item-details-main">
                        <div className="item-details-main-summary">
                            <h2
                                className="item-details-main-summary__title wow fadeInLeft"
                                data-wow-delay=".2s"
                                data-wow-duration="1s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1s",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                Summary
                </h2>
                            <p className="item-details-main-summary__content">
                                {details.overview}
                            </p>
                        </div>
                        <div className="item-details-main-cast">
                            <h2 className="item-details-main-cast__title wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">Cast</h2>
                            <PeopleCarousel people={this.props.movieCredits.cast ? this.props.movieCredits.cast : ''} />
                        </div>
                        {details.trailer ? <Trailers check={2} trailers={details.trailer} /> : (<div className="item-details-main-reviews-container">
                            <p className="item-details-main-reviews-container__error">No Trailers found :(</p>
                        </div>)}
                        <div className="item-details-main-reviews">
                            <h2 className="item-details-main-reviews__title wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">Popular Reviews</h2>
                            {/* check null de duyet reviews */}
                            {reviews.total_results > 0 ? reviews.results.map(reviews =>
                                (<div key={reviews.url} className="item-details-main-reviews-container">
                                    <h3 className="item-details-main-reviews-container__author">{reviews.author}</h3>
                                    <p className="item-details-main-reviews-container__content">{this.shortText(reviews.content)}</p>
                                    <a className="item-details-main-reviews-container__link" href={reviews.url} target="_blank">
                                        <p>See full review</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" /></svg>
                                    </a>
                                </div>)
                            ) :
                                (<div className="item-details-main-reviews-container">
                                    <p className="item-details-main-reviews-container__error">No reviews found :(</p>
                                </div>)
                            }

                        </div>
                        <div className="item-details-main-reviews">
                            <h2 className="item-details-main-reviews__title wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="1s">Showing</h2>
                            <div class="row">
                                <ProjectScheduleDetails genres={genres} lichChieu={this.state.lichChieu} pass={this.props} seats={this.props.seats} itemDetails={details} />
                            </div>
                        </div>
                    </main>
                    <Hotline />
                </div >
            </div>) : (<p>Loading</p>)
        )
    }
}
const mapStateToProps = state => {
    return {
        // details: state.getDetails.result,
        reviews: state.getReviews.result,
        trailers: state.getTrailers.result.results,
        movieCredits: state.getMovieCredits,

        userDetails: state.getUserDetails,
        session: state.getSession,
        logInStatus: state.toggleLogInStatus.status,

        peopleDetails: state.getPeopleDetails,
        peopleCombinedCredits: state.getPeopleCombinedCredits,

        seats: state.getSeats.result.danhSachGhe

    }
}
const mapDispatchToProps = dispatch => {
    return {
        // onSaveDetails: id => {
        //     dispatch(action.getDetailsAPI(id))
        // },
        onSaveReviews: id => {
            dispatch(action2.getReviewsAPI(id))
        },
        onSaveTrailers: id => {
            dispatch(action3.getTrailersAPI(id))
        },
        onSaveSeats: (id) => {
            dispatch(action4.getSeatsAPI(id))
        },
        getMovieCredits: url => dispatch(getMovieCredits(url)),
        getPeopleDetails: url => dispatch(getPeopleDetails(url)),
        getPeopleCombinedCredits: url => dispatch(getPeopleCombinedCredits(url)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovies)