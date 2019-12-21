import React, { Component, Fragment } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../HomeHeader/HomeHeader.scss';
import { connect } from 'react-redux'
import * as action from "../../actions/movieActions/getNowPlaying"
import postMovieGenres from '../../actions/movieActions/postMovieGenres';
import '../PaymentDetails/Carousel.scss'
class HomeHeader extends Component {

    componentDidMount() {
        this.props.onSaveCarousel()
        this.props.postMovieGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US")
    }

    handleGetGenre = genreId => {
        let mainGenre;
        if (this.props.movieGenres.genres) {
            this.props.movieGenres.genres.forEach(genre => {
                if (genre.id === genreId[0]) {
                    mainGenre = genre.name;
                }
            });
        }

        return mainGenre;
    }
    renderItem = () => {
        return this.props.carousel && this.props.carousel.map((item, index) => {
            if (index >= 0 && index < 3) {
                return (
                    <li className={`num${index} img slide`}><img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} style={{ width: '100%', height: '86%' }} /></li>
                )
            }
        })
    }
    renderThumb = () => {
        return this.props.carousel && this.props.carousel.map((item, index) => {
            if (index >= 0 && index < 3) {
                return (
                    <label className={`num${index}`} htmlFor="cs_slide1_0">
                        <span className="cs_point" />
                        <span className="cs_thumb">
                            <img
                                src={`https://image.tmdb.org/t/p/w92/${item.poster_path}`}
                                alt="Scooter"
                                title="Scooter"
                            />
                        </span>
                    </label>
                )
            }
        })
    }
    renderDes = () => {
        return this.props.carousel && this.props.carousel.map((item, index) => {
            if (index >= 0 && index < 3) {
                return (
                    <label className={`num${index}`}>
                        <span className="cs_title">
                            <span className="cs_wrapper">{item.title}</span>
                        </span>
                        <br />
                        <span className="cs_descr">
                            <span className="cs_wrapper">RATING: {item.vote_average}</span>
                            <div className="cs_wrapper">BUDGET: {item.popularity}</div>
                            <div className="cs_wrapper">{this.handleGetGenre(item.genre_ids)}</div>
                        </span>
                    </label>
                )
            }
        })
    }
    render() {
        // let {carousel} = this.props
        return (
            <Fragment>
                {/* <Carousel touch={true}> */}
                <section id="rt-showcase-surround">
                    <div id="rt-showcase" className="slider-container rt-overlay-dark">
                        <div className="rt-container slider-container">
                            <div className="rt-grid-12 rt-alpha rt-omega">
                                <div className="csslider1 autoplay ">
                                    <input
                                        name="cs_anchor1"
                                        id="cs_slide1_0"
                                        type="radio"
                                        className="cs_anchor slide"
                                    />
                                    <input
                                        name="cs_anchor1"
                                        id="cs_slide1_1"
                                        type="radio"
                                        className="cs_anchor slide"
                                    />
                                    <input
                                        name="cs_anchor1"
                                        id="cs_slide1_2"
                                        type="radio"
                                        className="cs_anchor slide"
                                    />
                                    <input
                                        name="cs_anchor1"
                                        id="cs_play1"
                                        type="radio"
                                        className="cs_anchor"
                                        defaultChecked
                                    />
                                    <input
                                        name="cs_anchor1"
                                        id="cs_pause1_0"
                                        type="radio"
                                        className="cs_anchor pause"
                                    />
                                    <input
                                        name="cs_anchor1"
                                        id="cs_pause1_1"
                                        type="radio"
                                        className="cs_anchor pause"
                                    />
                                    <input
                                        name="cs_anchor1"
                                        id="cs_pause1_2"
                                        type="radio"
                                        className="cs_anchor pause"
                                    />
                                    <ul>
                                        <li className="cs_skeleton">
                                            <img src="http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg" style={{ width: '100%' }} />
                                        </li>
                                        {this.renderItem()}
                                    </ul>
                                    <div className="cs_description">
                                        {this.renderDes()}
                                    </div>
                                    <div className="cs_arrowprev">
                                        <label className="num0" htmlFor="cs_slide1_0">
                                            <span>
                                                <i />
                                                <b />
                                            </span>
                                        </label>
                                        <label className="num1" htmlFor="cs_slide1_1">
                                            <span>
                                                <i />
                                                <b />
                                            </span>
                                        </label>
                                        <label className="num2" htmlFor="cs_slide1_2">
                                            <span>
                                                <i />
                                                <b />
                                            </span>
                                        </label>
                                    </div>
                                    <div className="cs_arrownext">
                                        <label className="num0" htmlFor="cs_slide1_0">
                                            <span>
                                                <i />
                                                <b />
                                            </span>
                                        </label>
                                        <label className="num1" htmlFor="cs_slide1_1">
                                            <span>
                                                <i />
                                                <b />
                                            </span>
                                        </label>
                                        <label className="num2" htmlFor="cs_slide1_2">
                                            <span>
                                                <i />
                                                <b />
                                            </span>
                                        </label>
                                    </div>
                                    <div className="cs_bullets">
                                        {this.renderThumb()}
                                    </div>
                                </div>
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                </section>



            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        carousel: state.getNowPlaying.result.results,
        movieGenres: state.postMovieGenres,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveCarousel: () => {
            dispatch(action.getNowPlaying())
        },
        postMovieGenres: url => dispatch(postMovieGenres(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)