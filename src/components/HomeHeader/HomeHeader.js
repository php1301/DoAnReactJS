import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../HomeHeader/HomeHeader.scss';
import { connect } from 'react-redux'
import * as action from "../../actions/movieActions/getNowPlaying"
import postMovieGenres from '../../actions/movieActions/postMovieGenres';
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
              ) center center no-repeat, #fff url(https://image.tmdb.org/t/p/w1280/${item.poster_path}) center top no-repeat`, backgroundSize: 'cover, cover'
                            }}>
                            </div>
                            <img
                                className="d-block w-100"
                                src={`https://image.tmdb.org/t/p/w1280/${item.poster_path}`}
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
                {/* <Carousel.Item >
                    <a>
                        <div className="carousel-overlay">
                        </div>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/w1280/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg"
                            alt="First slide"
                            style={{
                                width: "1519px",
                                height: "700px"
                            }}
                        />
                    </a>
                    <Carousel.Caption>
                        <p class="carousel-category">LATEST</p>
                        <h3 className="carousel-h3">First slide label</h3>
                        <p className="carousel-p">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a>
                        <div className="carousel-overlay">
                        </div>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/w1280/t1Y6cder9jDjaJMV13GTttszaUg.jpg"
                            alt="Third slide"
                            style={{
                                width: "1519px",
                                height: "700px"
                            }}
                        />
                    </a>
                    <Carousel.Caption>
                        <p class="carousel-category">LATEST</p>
                        <h3 className="carousel-h3">Second slide label</h3>
                        <p className="carousel-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a>
                        <div className="carousel-overlay">
                        </div>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/w1280/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg"
                            alt="Third slide"
                            style={{
                                width: "1519px",
                                height: "700px"
                            }}
                        />
                    </a>
                    <Carousel.Caption>
                        <p class="carousel-category">LATEST</p>
                        <h3 className="carousel-h3">Third slide label</h3>
                        <p className="carousel-p"> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
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