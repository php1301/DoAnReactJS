import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
export default class NowPlaying extends Component {
    render() {
        return (
            <div className="main-content-container">
                <h2 class="main-content-container__title">Now Playing</h2>
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
                                min: 1024
                            },
                            items: 7,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
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
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                    <div className="item">
                        <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "127px", height: "190px" }} />
                    </div>
                </Carousel>
            </div>
        )
    }
}