<a href="#"><button className={`theme-btn fadeInLeft ${this.props.navStatus ? 'ticket-none' : ''}`} data-toggle="modal" data-target="#modalTicket" href="#"><i className="icofont icofont-ticket"></i>Tickets</button></a>
    <TicketModal />
              import React, { Component } from 'react'
import "../DetailMovies/DetailMovies.scss";
import { NavLink } from 'react-router-dom';
import Movies from '../Movies/Movies.js';
import PeopleCarousel from '../PeopleCarousel/PeopleCarousel';
import Trailers from '../Trailers/Trailers';
import * as action from "../../actions/movieActions/getDetails"
import { connect } from 'react-redux'
import { timingSafeEqual } from 'crypto';
import { Fragment } from 'react'
class DetailMovies extends Component {
    componentDidMount() {
        this.props.onSaveDetails()
    }
    renderItem = () => {
        return this.props.details && this.props.details.map((item, index) => {
            return (
                <div className="item-details" id="item-details-top">
                    <header
                        className="item-details-header-info"
                        style={{
                            background:
                                'linear-gradient(0deg, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0.45) 92%) center center no-repeat, url("https://image.tmdb.org/t/p/original/rtf4vjjLZLalpOzDUi0Qd2GTUqq.jpg") center top no-repeat rgb(255, 255, 255)'
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
                        {/* <div className="item-details-header-info-share-buttons item-details-header-info-share-buttons__hide">

                        <a onClick={this.handleShareButton} href={`mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ${'www.filmcloud.xyz/' + this.props.match.params.type + '/' + `${this.props.match.params.type === 'movie' ? this.props.movieDetails.id : this.props.TVDetails.id}`}`}><img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email" /></a>
                        <a onClick={this.handleShareButton} href={`http://www.facebook.com/sharer.php?u=${'www.filmcloud.xyz/' + this.props.match.params.type + '/' + `${this.props.match.params.type === 'movie' ? this.props.movieDetails.id : this.props.TVDetails.id}`}`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" /></a>
                        <a onClick={this.handleShareButton} href={`https://plus.google.com/share?url=${'www.filmcloud.xyz/' + this.props.match.params.type + '/' + `${this.props.match.params.type === 'movie' ? this.props.movieDetails.id : this.props.TVDetails.id}`}`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google" /> </a>
                        <a onClick={this.handleShareButton} href={`http://reddit.com/submit?url=${'www.filmcloud.xyz/' + this.props.match.params.type + '/' + `${this.props.match.params.type === 'movie' ? this.props.movieDetails.id : this.props.TVDetails.id}`}&amp;title=Film Cloud`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" /></a>
                        <a onClick={this.handleShareButton} href={`http://www.tumblr.com/share/link?url=${'www.filmcloud.xyz/' + this.props.match.params.type + '/' + `${this.props.match.params.type === 'movie' ? this.props.movieDetails.id : this.props.TVDetails.id}`}&amp;title=Film Cloud`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" /></a>
                        <a onClick={this.handleShareButton} href={`https://twitter.com/share?url=${'www.filmcloud.xyz/' + this.props.match.params.type + '/' + `${this.props.match.params.type === 'movie' ? this.props.movieDetails.id : this.props.TVDetails.id}`}&amp;text=Film%20Cloud%20&amp;hashtags=filmcloud`} rel="noopener noreferrer" target="_blank"><img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" /></a>

                    </div> */}
                        <div className="item-details-header-info-container">
                            <img
                                className="item-details-header-info-container-image"
                                src="https://image.tmdb.org/t/p/w92/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg"
                                alt="Terminator: Dark Fate"
                            />
                            <div className="item-details-header-info-container-content">
                                <h1 className="item-details-header-info-container-content__title">
                                    Terminator: Dark Fate
                  </h1>
                                <div className="item-details-header-info-container-content-rating">
                                    <p className="item-details-header-info-container-content-rating__digit">
                                        6.6
                    </p>
                                    <div className="star-rating-container">
                                        <svg
                                            className="star-rating-container__item star-rating-container__item--active"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                        </svg>
                                        <svg
                                            className="star-rating-container__item star-rating-container__item--active"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                        </svg>
                                        <svg
                                            className="star-rating-container__item star-rating-container__item--active"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                        </svg>
                                        <svg
                                            className="star-rating-container__item"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                        </svg>
                                        <svg
                                            className="star-rating-container__item"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="item-details-header-info-container-content__detail">
                                    Released | EN
                  </p>
                                <p className="item-details-header-info-container-content__genre">
                                    Action | Science Fiction
                  </p>
                                <svg
                                    className="item-details-header-info-container-content__favorite wow pulse"
                                    data-wow-delay=".5s"
                                    data-wow-duration="2s"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "2s",
                                        animationDelay: "0.5s",
                                        animationName: "pulse"
                                    }}
                                >
                                    <path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z" />
                                </svg>
                            </div>
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
                                More than two decades have passed since Sarah Connor prevented Judgment
                                Day, changed the future, and re-wrote the fate of the human race. Dani
                                Ramos is living a simple life in Mexico City with her brother and father
                                when a highly advanced and deadly new Terminator – a Rev-9 – travels
                                back through time to hunt and kill her. Dani's survival depends on her
                                joining forces with two warriors: Grace, an enhanced super-soldier from
                                the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly
                                destroys everything and everyone in its path on the hunt for Dani, the
                                three are led to a T-800 from Sarah’s past that may be their last best
                                hope.
                </p>
                        </div>
                        <PeopleCarousel People={this.props.details} />
                        <Trailers Trailers={this.props.details} />
                        <div className="item-details-main-reviews">
                            <h2
                                className="item-details-main-reviews__title wow fadeInLeft"
                                data-wow-delay=".2s"
                                data-wow-duration="1s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1s",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                Popular Reviews
                </h2>
                            <div className="item-details-main-reviews-container">
                                <h3 className="item-details-main-reviews-container__author">SWITCH.</h3>
                                <p className="item-details-main-reviews-container__content">
                                    Leaving ‘Terminator: Dark Fate’, I never felt like they managed to
                                    save the franchise, nor overwhelmingly glad this movie exists. It’s an
                                    adequate addition in a messy franchise that never reaches the heights
                                    of the first two films but is just above the three films before it,
                                    and because of...
                  </p>
                                <a
                                    className="item-details-main-reviews-container__link"
                                    href="https://www.themoviedb.org/review/5db78f7ad2c0c100181681bb"
                                    target="_blank"
                                >
                                    <p>See full review</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="item-details-main-reviews-container">
                                <h3 className="item-details-main-reviews-container__author">
                                    msbreviews
                  </h3>
                                <p className="item-details-main-reviews-container__content">
                                    If you enjoy reading my Spoiler-Free reviews, please follow my blog :)
                                    When it comes to the Terminator franchise, I share the same opinion as
                                    most people. The 1984’s original became a cult classic, and it’s one
                                    of the most influential sci-fi/action films of all-time. Terminator 2:
                                    Judgment Day is one...
                  </p>
                                <a
                                    className="item-details-main-reviews-container__link"
                                    href="https://www.themoviedb.org/review/5dc065fe7d2bc1001338b963"
                                    target="_blank"
                                >
                                    <p>See full review</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            )
        })
    }
    render() {
        return (
            <Fragment>
                {this.renderItem()}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.getDetails.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveDetails: () => {
            dispatch(action.getDetailsAPI())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovies)
return this.props.seats && this.props.seats.map((item, index) => {
    count++;
    index++;
    // if (index === 1){
    //     return (
    //         ReactHtmlParser(html2)
    //     )
    // }
    if (index % 11 !== 0) {
        return (

            <Seats daDat={this.state.daDat} item={count} />
        )
    }
    count = count - 11;
    // else {
    //     return (
    //         <Fragment>
    //             <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
    //             <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
    //             <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li>
    //         </Fragment>
    //     )
    // }

})
let count = 0
let html = `<li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
        <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
        <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li> 
        </ul>
        </li>`
let html2 = `<li>
        <ul>
            <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li>
            <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
            <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />`
let count = 0;
const arr = [1, 2, 3]
// return <div>{ReactHtmlParser(html2 + html)}</div>
arr.map((item) => {
    return (
        <li>
            <ul>
                <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li>
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                {this.props.seats && this.props.seats.map((index) => {
                    count++;
                    if (index < 11)
                        return <Seats daDat={this.state.daDat} item={count} />
                }

                )}
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                <li className="omb-slot" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }} />
                <li className="omb-row-name" style={{ width: '40.23529411764706px', height: '40.23529411764706px', lineHeight: '40.23529411764706px' }}>A</li>
            </ul>
        </li>
    )
})