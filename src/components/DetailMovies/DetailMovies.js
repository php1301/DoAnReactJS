import React, { Component } from 'react'
import "../DetailMovies/DetailMovies.scss";
import { Link, NavLink } from 'react-router-dom';
import Movies from '../Movies/Movies.js';
import PeopleCarousel from '../PeopleCarousel/PeopleCarousel';
import Trailers from '../Trailers/Trailers';
import * as action from "../../actions/movieActions/getDetails"
import * as action2 from "../../actions/movieActions/getReviews";
import * as action3 from "../../actions/movieActions/getTrailers";
import * as action4 from "../../actions/ticketActions/getSeats"
import getMovieCredits from '../../actions/movieActions/getMovieCredits';
import getPeopleDetails from '../../actions/peopleActions/getPeopleDetails';
import getPeopleCombinedCredits from '../../actions/peopleActions/getPeopleCombinedCredits';
import { connect } from 'react-redux'
import StarRating from '../StarRating/StarRating';
import "../DetailMovies/Ticket.scss"
import ScheduleDetails from '../ScheduleDetails/ScheduleDetails';
import Hotline from '../Hotline/Hotline';
import Loader from '../Loader/Loader'
import Favorite from './Favorite';
class DetailMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
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
  
   
    componentDidMount() {
        let id = this.props.match.params.id
        // id == undefined 
        this.props.getPeopleDetails(`https://api.themoviedb.org/3/person/${id}?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`);
        this.props.getPeopleCombinedCredits(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`);
        this.props.getMovieCredits(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`);
        this.props.onSaveDetails(id)
        this.props.onSaveReviews(id)
        this.props.onSaveTrailers(id)
        this.props.onSaveSeats(16016)
    }
    render() {
        let { details } = this.props
        let { reviews } = this.props
        let genres = details.genres ? `${details.genres[0] ? details.genres[0].name : ''}` + `${details.genres[1] ? ' | ' + details.genres[1].name : ''}` : ''
        return (
            <div>
                <Loader />
                <div className="item-details" id="item-details-top">
                    <header
                        className="item-details-header-info"
                        style={{
                            background:
                                `linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url(https://image.tmdb.org/t/p/original/${details.backdrop_path}) center top no-repeat rgb(255, 255, 255)`
                        }}
                    >
                        <div className="item-details-header-info-nav">
                            <NavLink to="/">
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
                                src={`https://image.tmdb.org/t/p/w92/${details.poster_path}`}
                                alt="Terminator: Dark Fate"
                            />
                            <div className="item-details-header-info-container-content">
                                <h1 className="item-details-header-info-container-content__title">
                                    {details.original_title}
                                </h1>
                                <div className="item-details-header-info-container-content-rating">
                                    <p className="item-details-header-info-container-content-rating__digit">
                                        {this.props.details.vote_average}
                                    </p>
                                    <StarRating star={this.props.details.vote_average} />
                                </div>
                                <p className="item-details-header-info-container-content__detail">
                                    {details.status} | {details.original_language}
                                </p>
                                <p className="item-details-header-info-container-content__genre">
                                    {/* {details.genres ? `${details.genres[0] ? details.genres[0].name : ''}` + `${details.genres[1] ? ' | ' + details.genres[1].name : ''}` : ''} */}
                                    {genres}
                                </p>
                                <Favorite details={details} genres={genres} logInStatus={this.props.logInStatus} />
                                {/* <li><Link class="theme-btn" to={this.props.logInStatus || this.props.session.failure ? `/ticket/${this.props.match.params.id}/${this.props.match.params.idticket}` : `/login`}><i class="icofont icofont-ticket"></i> Tickets</Link></li> */}
                            </div>
                        </div>
                        <div className="item-details-header-info-container-account-warning item-details-header-info-container-account-warning--hide">
                            <p>Use a TDMB account to use this feature</p>
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
                        {this.props.trailers && this.props.trailers.length > 2 ? <Trailers trailers={this.props.trailers} /> : (<div className="item-details-main-reviews-container">
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
                                <ScheduleDetails seats={this.props.seats} itemDetails={this.props.details} />
                            </div>
                        </div>
                    </main>
                    <Hotline />
                </div >
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.getDetails.result,
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
        onSaveDetails: id => {
            dispatch(action.getDetailsAPI(id))
        },
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