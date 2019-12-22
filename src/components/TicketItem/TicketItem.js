import React, { Component, Fragment } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import { NavLink, Link } from 'react-router-dom';
import * as action from "../../actions/movieActions/getGenres"

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

const star = <svg class="swiper-slide-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
class TicketItem extends Component {
  componentDidMount() {
    this.props.onSaveGenres()
    this.props.onSaveNowPlaying()
  }
  renderItem = () => {

    return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
      return (
        <li className="album-slider__item" style={{ float: 'left', listStyle: 'none', position: 'relative', marginRight: "17px" }}>
          <figure className="album">
            <div className="prs_upcom_movie_box_wrapper">
              <div className="prs_upcom_movie_img_box">
                <img src={` http://image.tmdb.org/t/p/w185//${item.poster_path}`} style={{ height: "303px" }} />
                <div className="prs_upcom_movie_img_overlay" />
                <div className="prs_upcom_movie_img_btn_wrapper">
                  <ul>
                    <li>
                      <ViewTrailer tenphim={item.title} id={item.id} />
                    </li>
                    <li><Link to={`/details/movie/${item.id}`}>View Details</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="prs_upcom_movie_content_box">
                <div className="prs_upcom_movie_content_box_inner">
                  <h3 style={{ color: "black" }} className="main-content-container-item__item-title">{item.title}</h3>
                  <p style={{ color: "white" }} className="main-content-container-item__rating">{star} {item.vote_average} </p>
                  <p style={{ color: "black" }}>{this.handleGenres(item.genre_ids.map((item2, index) => { if (index < 2) return item2 }))}</p>
                  <p style={{ color: "black" }}>{item.release_date}</p>
                  <p style={{ color: "black" }}>{item.popularity}<i className="fa fa-star" /></p>
                </div>
                <div className="prs_upcom_movie_content_box_inner_icon">
                  <ul>
                    <li><a href="movie_booking.html"><i class="icofont icofont-ticket"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="prs_webseri_video_sec_icon_wrapper "><ul><li><ButtonTrailer tenphim={item.title} id={item.id} /></li></ul></div>
          </figure>
        </li>
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

    return arrOutput.map((category, i, index) => {
      return (
        <div key={i}>
          {category.name}
        </div>
      )
    })

  }
  render() {
    // {this.props.renderItem === true
    return (
      <Fragment>
        {this.props.renderItem === true ? (
          <Fragment>
            <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"SPECIAL FEATURING"} class="main-content-container__title glitch ">{"SPECIAL FEATURING"}</h2>
            <HrLine />
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlay
              autoPlaySpeed={3500}
              // customTransition="all 1s linear"
              centerMode={true}
              className="wow fadeIn"
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 6,
                  partialVisibilityGutter: 80,
                },
                mobile: {
                  breakpoint: {
                    max: 802,
                    min: 502
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                supermobile: {
                  breakpoint: {
                    max: 502,
                    min: 0
                  },
                  items: 1,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 802
                  },
                  items: 3,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={2}
              swipeable
            >

              {this.renderItem()}
            </Carousel>
            <HrLine />
          </Fragment>
        ) : ""}
      </Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    genres: state.getGenres.result.genres,
    nowPlaying: state.getNowPlaying.result.results,

  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSaveGenres: () => {
      dispatch(action.getGenresAPI())
    },
    onSaveNowPlaying: () => {
      dispatch(action4.getNowPlaying())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketItem)
