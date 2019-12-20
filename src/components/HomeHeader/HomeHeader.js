import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../HomeHeader/HomeHeader.scss';
import { connect } from 'react-redux'
import * as action from "../../actions/movieActions/getNowPlaying"
import postMovieGenres from '../../actions/movieActions/postMovieGenres';
import TweenMax from 'gsap/all'
import Expo from 'gsap/all'
import $ from 'jquery'
import Quint from 'gsap/all'
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
            if (index > 3 && index < 7) {
                return (
                    <Carousel.Item >
                        <a>
                            <div className="carousel-overlay" style={{
                                background: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ) center center no-repeat, #fff url('https://image.tmdb.org/t/p/w1280/${item.backdrop_path}') center top no-repeat`, backgroundSize: 'cover, cover'
                            }}>
                            </div>
                            <img
                                className="d-block w-100"
                                src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                                alt="First slide"
                                style={{
                                    width: "1519px",
                                    height: "700px"
                                }}
                            />
                        </a>
                        <Carousel.Caption>
                            <p class="carousel-category">LATEST</p>
                            <h3 className="carousel-h3">{item.original_title}</h3>
                            <p className="carousel-p">{item.vote_average} | {this.handleGetGenre(item.genre_ids)}</p>
                        </Carousel.Caption>
                    </Carousel.Item >
                )
            }
        })
    }
    render() {
        // let {carousel} = this.props
        return (
            <Carousel touch={true}>
                {this.renderItem()}
                
            </Carousel>
            // <div id="contentContainer" class="trans3d">
            //     <section id="carouselContainer" class="trans3d">
            //         <figure id="item1" class="carouselItem trans3d"><div class="carouselItemInner trans3d">1</div></figure>
            //         <figure id="item2" class="carouselItem trans3d"><div class="carouselItemInner trans3d">2</div></figure>
            //         <figure id="item3" class="carouselItem trans3d"><div class="carouselItemInner trans3d">3</div></figure>
            //         <figure id="item4" class="carouselItem trans3d"><div class="carouselItemInner trans3d">4</div></figure>
            //         <figure id="item5" class="carouselItem trans3d"><div class="carouselItemInner trans3d">5</div></figure>
            //         <figure id="item6" class="carouselItem trans3d"><div class="carouselItemInner trans3d">6</div></figure>
            //         <figure id="item7" class="carouselItem trans3d"><div class="carouselItemInner trans3d">7</div></figure>
            //         <figure id="item8" class="carouselItem trans3d"><div class="carouselItemInner trans3d">8</div></figure>
            //         <figure id="item9" class="carouselItem trans3d"><div class="carouselItemInner trans3d">9</div></figure>
            //         <figure id="item10" class="carouselItem trans3d"><div class="carouselItemInner trans3d">10</div></figure>
            //         <figure id="item11" class="carouselItem trans3d"><div class="carouselItemInner trans3d">11</div></figure>
            //         <figure id="item12" class="carouselItem trans3d"><div class="carouselItemInner trans3d">12</div></figure>
            //     </section>
            // </div>
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