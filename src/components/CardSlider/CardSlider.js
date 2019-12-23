import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../CardSlider/CardSlider.scss'
import * as action2 from "../../actions/movieActions/getUpcoming";
import * as action4 from "../../actions/movieActions/getNowPlaying";
import ViewTrailer from "../TicketItem/ViewTrailer"
import ButtonTrailer from "../TicketItem/ButtonTrailer"
import postMovieGenres from '../../actions/movieActions/postMovieGenres';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const HrLine = () => (

    <hr style={{
        backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
        border: "none",
        height: "2px"
    }}
    />
)
class CardSlider extends Component {
    componentDidMount() {
        this.props.onSaveNowPlaying()
        window.$(".prs1_vp_left_slider").bxSlider({
            minSlides: 1,
            autoDirection: 'next',
            mode: 'vertical',
            maxSlides: 15,
            slideWidth: 257,
            slideMargin: 17,
            ticker: true,
            tickerHover: true,
            speed: 15000,
            useCSS: false,
            infiniteLoop: false

        });
        window.$(".prs1_vp_right_slider").bxSlider({
            minSlides: 1,
            mode: 'vertical',
            autoDirection: 'prev',
            maxSlides: 15,
            slideWidth: 257,
            slideMargin: 17,
            ticker: true,
            tickerHover: true,
            speed: 15000,
            useCSS: false,
            infiniteLoop: false

        });


    }
    renderItem = () => {
        return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
            if (index >= 8 && index < 14) {
                return (
                    <li className="album-slider__item prs1_vp_hover_overlay" style={{ float: 'none', listStyle: 'none', position: 'relative', width: 175, marginBottom: 17 }}>
                        <figure className="album">
                            <div className="prs1_vp_img_overlay">
                                <img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt="vp_img" />
                                <Link to={`/details/movie/${item.id}`} className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12">
                                    <i className="fa fa-search" />
                                </Link>
                            </div>
                        </figure>
                    </li>
                )
            }
            if (index >= 0 && index <= 6) {
                return (
                    <li className="album-slider__item prs1_vp_hover_overlay" style={{ float: 'none', listStyle: 'none', position: 'relative', width: 175, marginBottom: 17 }}>
                        <figure className="album">
                            <div className="prs1_vp_img_overlay">
                                <img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt="vp_img" />
                                <Link to={`/details/movie/${item.id}`} className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12">
                                    <i className="fa fa-search" />
                                </Link>
                            </div>
                        </figure>
                    </li>
                )
            }
        })
    }
    renderItem2 = () => {
        return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
            if (index >= 0 && index <=6) {
                return (
                    <li className="album-slider__item prs1_vp_hover_overlay bx-clone" style={{ float: 'none', listStyle: 'none', position: 'relative', width: 175, marginBottom: 17 }}>
                        <figure className="album">
                            <div className="prs1_vp_img_overlay">
                                <img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt="vp_img" />
                                <Link to={`/details/movie/${item.id}`} className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12">
                                    <i className="fa fa-search" />
                                </Link>
                            </div>
                        </figure>
                    </li>
                )
            }
            if (index >= 8 && index <=14) {
                return (
                    <li className="album-slider__item prs1_vp_hover_overlay bx-clone" style={{ float: 'none', listStyle: 'none', position: 'relative', width: 175, marginBottom: 17 }}>
                        <figure className="album">
                            <div className="prs1_vp_img_overlay">
                                <img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt="vp_img" />
                                <Link to={`/details/movie/${item.id}`} className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12">
                                    <i className="fa fa-search" />
                                </Link>
                            </div>
                        </figure>
                    </li>
                )
            }
        })
    }


    renderOwl = () => {
        return this.props.nowPlaying && this.props.nowPlaying.length > 0 && (
            <OwlCarousel
                className="owl-theme owl-loaded"
                loop
                margin={10}
                nav
                autoplay
                responsiveClass
                smartSpeed={1200}
                navText={['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>']}
                responsive={{
                    0: {
                        items: 1,
                        nav: true
                    },
                    500: {
                        items: 1,
                        nav: true
                    },
                    700: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }}>
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: 'translate3d(-3216px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: 5628 }}>
                        {this.props.nowPlaying.map((item, index) => {
                            if (index >= 1 && index < 16 && index !== 7) {
                                return (
                                    <div className="owl-item" style={{ width: 784, marginRight: 20 }}><div className="item">
                                        <div className="prs1_vp_center_slider_img_wrapper">
                                            <img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt="vp_img" />
                                            <Link to={`details/movie/${item.id}`} className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12"><i className="fa fa-search" /></Link>
                                        </div>
                                    </div></div>
                                )
                            }
                        })}
                    </div>
                </div>
            </OwlCarousel>
        )

    }
    render() {
        return (
            <Fragment>
                {this.props.renderItem === true ? (
                    <div className="prs1_vp_main_section_wrapper">
                        <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"SHOWDOWN"} class="main-content-container__title glitch ">SHOWDOWN</h2>
                        <HrLine />
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="prs1_heading_section_wrapper">
                                <h2>Video &amp; photos</h2>
                            </div>
                        </div> */}
                                <div className="prs1_vp_main_slider_wrapper">
                                    <div className="prs1_vp_left_slidebar_wrapper">
                                        <div className="wrap-album-slider">
                                            <ul className="prs1_vp_left_slider" style={{ width: 'auto', position: 'relative', top: '-496.079px' }}>
                                                {this.renderItem()}
                                                <li className="album-slider__item prs1_vp_hover_overlay" style={{ float: 'none', listStyle: 'none', position: 'relative', width: 175, marginBottom: 17 }}>
                                                    <figure className="album">
                                                        <div className="prs1_vp_img_overlay">
                                                            <img src="http://www.webstrot.com/html/moviepro/html/images/content/vp6.jpg" alt="vp_img" />
                                                            <a href="images/content/vp1.jpg" className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12">
                                                                <i className="fa fa-search" />
                                                            </a>
                                                        </div>
                                                    </figure>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="prs1_vp_center_slidebar_wrapper">
                                        <div className="prs1_vp_center_slider">
                                            {this.renderOwl()}
                                        </div>
                                    </div>
                                    <div className="prs1_vp_right_slidebar_wrapper">
                                        <div className="wrap-album-slider">
                                            <div className="bx-wrapper" style={{ maxWidth: 257 }}><div className="bx-viewport" style={{ width: '100%', overflow: 'hidden', position: 'relative', height: 175 }}>
                                                <ul className="prs1_vp_right_slider" style={{ width: 'auto', position: 'relative', top: '-267.341px' }}>
                                                    {this.renderItem2()}
                                                    <li className="album-slider__item prs1_vp_hover_overlay bx-clone" style={{ float: 'none', listStyle: 'none', position: 'relative', width: 175, marginBottom: 17 }}>
                                                        <figure className="album">
                                                            <div className="prs1_vp_img_overlay">
                                                                <img src="http://www.webstrot.com/html/moviepro/html/images/content/vp6.jpg" alt="vp_img" />	<a href="images/content/vp6.jpg" className="venobox info vbox-item" data-title="PORTFOLIO TITTLE" data-gall="gall12"><i className="fa fa-search" /></a>
                                                            </div>
                                                        </figure>
                                                    </li>
                                                </ul></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HrLine />
                    </div>
                ) : ""}
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        genres: state.getGenres.result.genres,
        upcoming: state.getUpcoming.result.results,
        nowPlaying: state.getNowPlaying.result.results,
        movieGenres: state.postMovieGenres,

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
        postMovieGenres: url => dispatch(postMovieGenres(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardSlider)