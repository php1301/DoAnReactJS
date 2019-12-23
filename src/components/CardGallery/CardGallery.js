import React, { Component, Fragment } from 'react'
import '../CardGallery/CardGallery.scss'
import $ from "jquery"
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
class CardGallery extends Component {
    componentDidMount() {
        this.props.onSaveNowPlaying()
        this.props.onSaveUpcoming(
            this.props.postMovieGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US")
        )
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
    renderThumb = () => {
        return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
            if (index >= 0 && index < 4) {
                return (
                    <label className={`num${index}`} htmlFor="cs_slide1_0">
                        <span className="cs1_point" />
                        <span className="cs1_thumb">
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
        return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
            if (index >= 0 && index < 4) {
                return (
                    <label className={`num${index}`}>
                        <span className="cs1_title"><span className="cs1_wrapper">{item.title}</span></span>
                        <br /><span className="cs1_descr"><span className="cs1_wrapper">{this.handleGetGenre(item.genre_ids)}</span></span>
                    </label>
                )
            }
        })
    }
    renderItem = () => {
        return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
            if (index >= 0 && index < 4) {
                return (
                    <li className={`num${index} img slide`}><Link to={`/details/movie/${item.id}`}><img src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} style={{ width: '100%', height: '100%' }} /></Link></li>
                )
            }
        })
    }
    render() {
        return (
            <Fragment>
                {this.props.renderItem === true ? (
                    <section id="rt1-showcase-surround">
                        <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"HOLLYWOOD NEWS"} class="main-content-container__title glitch ">HOLLYWOOD NEWS</h2>
                        <HrLine />
                        <div id="rt1-showcase" className="slider1-container rt1-overlay-dark">
                            <div className="rt1-container slider1-container">
                                <div className="rt1-grid-12 rt1-alpha rt1-omega">
                                    <div className="cs1slider1 autoplay ">
                                        <input name="cs1_anchor1" id="cs1_slide1_0" type="radio" className="cs1_anchor slide" />
                                        <input name="cs1_anchor1" id="cs1_slide1_1" type="radio" className="cs1_anchor slide" />
                                        <input name="cs1_anchor1" id="cs1_slide1_2" type="radio" className="cs1_anchor slide" />
                                        <input name="cs1_anchor1" id="cs1_slide1_3" type="radio" className="cs1_anchor slide" />
                                        <input name="cs1_anchor1" id="cs1_play1" type="radio" className="cs1_anchor" defaultChecked />
                                        <input name="cs1_anchor1" id="cs1_pause1_0" type="radio" className="cs1_anchor pause" />
                                        <input name="cs1_anchor1" id="cs1_pause1_1" type="radio" className="cs1_anchor pause" />
                                        <input name="cs1_anchor1" id="cs1_pause1_2" type="radio" className="cs1_anchor pause" />
                                        <input name="cs1_anchor1" id="cs1_pause1_3" type="radio" className="cs1_anchor pause" />
                                        <ul>
                                            <li className="cs1_skeleton">
                                                <img src="https://cssslider.com/sliders/demo-27/data1/images/polaroid594200_1280.jpg" style={{ width: '100%' }} alt="Wordpress range touch carousel online header" />
                                            </li>
                                            {this.renderItem()}
                                        </ul>
                                        <div className="cs1_description">
                                            {this.renderDes()}
                                        </div>
                                        <div className="cs1_arrowprev">
                                            <label className="num0" htmlFor="cs1_slide1_0"><span><i /><b /></span></label>
                                            <label className="num1" htmlFor="cs1_slide1_1"><span><i /><b /></span></label>
                                            <label className="num2" htmlFor="cs1_slide1_2"><span><i /><b /></span></label>
                                            <label className="num3" htmlFor="cs1_slide1_3"><span><i /><b /></span></label>
                                        </div>
                                        <div className="cs1_arrownext">
                                            <label className="num0" htmlFor="cs1_slide1_0"><span><i /><b /></span></label>
                                            <label className="num1" htmlFor="cs1_slide1_1"><span><i /><b /></span></label>
                                            <label className="num2" htmlFor="cs1_slide1_2"><span><i /><b /></span></label>
                                            <label className="num3" htmlFor="cs1_slide1_3"><span><i /><b /></span></label>
                                        </div>
                                        <div className="cs1_bullets">
                                            {this.renderThumb()}
                                        </div>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <HrLine />
                    </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(CardGallery)