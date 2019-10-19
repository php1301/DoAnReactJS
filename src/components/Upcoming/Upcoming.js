import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
const star = <svg class="swiper-slide-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
export default class Upcoming extends Component {
    render() {
        return (

            <div className="main-content-container">
                <h2 class="main-content-container__title">Upcoming</h2>
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
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                    <div className="main-content-container-item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                        <h3 className="main-content-container-item__item-title">Dilwale Dulhania Le Jayenge</h3>
                        <p className="main-content-container-item__genres">Comedy / Drama</p>
                        <p className="main-content-container-item__rating">{star} 8.9 </p>
                    </div>
                </Carousel>
            </div>
        )
    }
}