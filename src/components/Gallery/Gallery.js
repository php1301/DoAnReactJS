import React, { Component, Fragment } from 'react'
import '../Gallery/Gallery.scss'
import { NavLink, Link } from 'react-router-dom';
import * as action2 from "../../actions/movieActions/getUpcoming";
import * as action4 from "../../actions/movieActions/getNowPlaying";

import ViewTrailer from "../TicketItem/ViewTrailer"
import ButtonTrailer from "../TicketItem/ButtonTrailer"
import { connect } from 'react-redux'
const HrLine = () => (

    <hr style={{
        backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
        border: "none",
        height: "2px"
    }}
    />
)

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }
    componentDidMount() {
        this.props.onSaveNowPlaying()
        this.props.onSaveUpcoming()
    }
    renderItems = () => {
        return this.props.upcoming && this.props.upcoming.map((item, index) => {
            if (index => 5 && index <= 9 ) {
                { this.something() }
                return (
                    <li data-color="#002A2F">
                        <Link to ={`/details/movie/${item.id}`}>
                        <div className="content" style={{ backgroundImage: `url( http://image.tmdb.org/t/p/w1280//${item.poster_path})` }}>
                            <blockquote>
                                <p>{item.overview.slice(0, 20)+"..."}</p>
                                <span>{item.vote_average}</span>
                            </blockquote>
                        </div>
                        </Link>
                    </li>
                )
            }
        })

    }
    something = () => {

        var autoUpdate = true,
            timeTrans = 4000;

        var cdSlider = document.querySelector('.cd-slider'),
            item = cdSlider.querySelectorAll("li"),
            nav = cdSlider.querySelector("nav");

        item[0].className = "current_slide";

        for (var i = 0, len = item.length; i < len; i++) {
            var color = item[i].getAttribute("data-color");
            item[i].style.backgroundColor = color;
        }

        // Detect IE
        // hide ripple effect on IE9
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE");
        if (msie > 0) {
            var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
            if (version === 9) { cdSlider.className = "cd-slider ie9"; }
        }

        if (item.length <= 1) {
            nav.style.display = "none";
        }

        function prevSlide() {
            var currentSlide = cdSlider.querySelector("li.current_slide"),
                prevElement = currentSlide.previousElementSibling,
                prevSlide = (prevElement !== null) ? prevElement : item[item.length - 1],
                prevColor = prevSlide.getAttribute("data-color"),
                el = document.createElement('span');

            currentSlide.className = "";
            prevSlide.className = "current_slide";

            nav.children[0].appendChild(el);

            var size = (cdSlider.clientWidth >= cdSlider.clientHeight) ? cdSlider.clientWidth * 2 : cdSlider.clientHeight * 2,
                ripple = nav.children[0].querySelector("span");

            ripple.style.height = size + 'px';
            ripple.style.width = size + 'px';
            ripple.style.backgroundColor = prevColor;

            ripple.addEventListener("webkitTransitionEnd", function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            });

            ripple.addEventListener("transitionend", function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            });

        }

        function nextSlide() {
            var currentSlide = cdSlider.querySelector("li.current_slide"),
                nextElement = currentSlide.nextElementSibling,
                nextSlide = (nextElement !== null) ? nextElement : item[0],
                nextColor = nextSlide.getAttribute("data-color"),
                el = document.createElement('span');

            currentSlide.className = "";
            nextSlide.className = "current_slide";

            nav.children[1].appendChild(el);

            var size = (cdSlider.clientWidth >= cdSlider.clientHeight) ? cdSlider.clientWidth * 2 : cdSlider.clientHeight * 2,
                ripple = nav.children[1].querySelector("span");

            ripple.style.height = size + 'px';
            ripple.style.width = size + 'px';
            ripple.style.backgroundColor = nextColor;

            ripple.addEventListener("webkitTransitionEnd", function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            });

            ripple.addEventListener("transitionend", function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            });

        }

        updateNavColor();

        function updateNavColor() {
            var currentSlide = cdSlider.querySelector("li.current_slide");

            var nextColor = (currentSlide.nextElementSibling !== null) ? currentSlide.nextElementSibling.getAttribute("data-color") : item[0].getAttribute("data-color");
            var prevColor = (currentSlide.previousElementSibling !== null) ? currentSlide.previousElementSibling.getAttribute("data-color") : item[item.length - 1].getAttribute("data-color");

            if (item.length > 2) {
                nav.querySelector(".prev").style.backgroundColor = prevColor;
                nav.querySelector(".next").style.backgroundColor = nextColor;
            }
        }

        nav.querySelector(".next").addEventListener('click', function (event) {
            event.preventDefault();
            nextSlide();
            updateNavColor();
        });

        nav.querySelector(".prev").addEventListener("click", function (event) {
            event.preventDefault();
            prevSlide();
            updateNavColor();
        });

        //autoUpdate
        setInterval(function () {
            if (autoUpdate) {
                nextSlide();
                updateNavColor();
            };
        }, timeTrans);

    };

    render() {
        console.log(this.state.img)
        return (

            <div className={this.props.style === true ? " wow fadeIn" : "gallery-hide"} data-wow-duration="3s" >
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"REVIEWS"} class="main-content-container__title glitch ">REVIEWS</h2>
                <HrLine />
                <section className="cd-slider">
                    <ul>
                        <li data-color="#002AFF">
                            <div className="content" style={{ backgroundImage: 'url(https://i.imgur.com/i7VlkGV.png?2)' }}>
                                <blockquote>
                                    <p>Will you still love me When I'm no longer young and beautiful Will you still love me</p>
                                    <span>Young And Beautiful - Lana Del Rey</span>
                                </blockquote>
                            </div>
                        </li>
                        {this.renderItems()}
                        <li data-color="#white">
                            <div className="content" style={{ backgroundImage: 'url(https://i.imgur.com/i7VlkGV.png?2)' }}>
                                <blockquote>
                                    <p>Will you still love me When I'm no longer young and beautiful Will you still love me</p>
                                    <span>Young And Beautiful - Lana Del Rey</span>
                                </blockquote>
                            </div>
                        </li>

                    </ul>
                    <nav>
                        <div className="gallery-arrow"><a className="prev" href="#" /></div>
                        <div className="gallery-arrow gallery-arrow-2"><a className="next" href="#" /></div>
                    </nav>
                </section>
                <HrLine />
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        genres: state.getGenres.result.genres,
        upcoming: state.getUpcoming.result.results,
        nowPlaying: state.getNowPlaying.result.results,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveUpcoming: () => {
            dispatch(action2.getUpcoming())
        },
        onSaveNowPlaying: () => {
            dispatch(action4.getNowPlaying())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)