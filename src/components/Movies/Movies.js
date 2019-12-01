import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import { NavLink, Link } from 'react-router-dom';
import * as action from "../../actions/movieActions/getGenres"
import { connect } from 'react-redux'
const star = <svg class="swiper-slide-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
class Movies extends Component {
    componentDidMount() {
        this.props.onSaveGenres()
    }
    renderItem = () => {
        return this.props.items && this.props.items.map((item, index) => {
            console.log(item)
            return (
                <div className="main-content-container-item">
                    <Link to={`/details/movie/${item.id}`}><img src={` http://image.tmdb.org/t/p/w185//${item.poster_path}`} style={{ width: "127px", height: "190px" }} /> </Link>
                    <h3 className="main-content-container-item__item-title">{item.original_title}</h3>
                    <p className="main-content-container-item__genres">{this.handleGenres(item.genre_ids)}</p>
                    <p className="main-content-container-item__rating">{star} {item.vote_average} </p>
                </div>
            )
        })
    }
    handleGenres = ids => {
        // Ids nhận vào là 1 mảng có nhiều id
        let genres = { ...this.props.genres }
        let arrGenres = Object.values(genres);
        let arrOutput = [];
        ids.map((id) => {
            let found = arrGenres.filter(x => x.id === id)
            found.forEach(element => {
                arrOutput.push(element)
            });
        })
        
        return arrOutput.map((category, i) => {
            return (
                <div key={i}>
                    {category.name}
                </div>
            )
        })
        
    }
    render() {
        // let {listMovies} = this.props
        return (
            <div>
                {/* <h2 class="main-content-container__title">Now Playing</h2> */}
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="main-content-gallery wow fadeInDown"
                    containerClass="container-fluid"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="padding-right-40px"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1255
                            },
                            items: 7,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 705,
                                min: 0
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1255,
                                min: 705
                            },
                            items: 4,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}
                >
                    {this.renderItem()}
                    {/* {this.handleGenres()} */}
                </Carousel>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        genres: state.getGenres.result.genres
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveGenres: () => {
            dispatch(action.getGenresAPI())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies)
