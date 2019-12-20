import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css"
import "../PeopleCarousel/PeopleCarousel.scss";
import { NavLink, Link } from 'react-router-dom'
const star = <svg class="swiper-slide-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
export default class PeopleCarousel extends Component {
    renderPeople = () => {
        return this.props.people && this.props.people.map((item, index) =>{
            return (
                <div className="people-container-item">
                            <NavLink to="#">
                                <img src={`https://image.tmdb.org/t/p/w154/${item.profile_path === null ? "bOlYWhVuOiU6azC4Bw6zlXZ5QTC.jpg" : item.profile_path}`} style={{ width: "120px", height: "160px" }} />
                                <h3 className="people-container-item__item-title">{item.name}</h3>
                            </NavLink>
                 </div>
            );
        })
        
    }
    render() {
        return (
            <div className="people-container">
                {/* <h2 className="item-details-main-summary__title wow fadeInLeft"
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.2s",
                        animationName: "fadeInLeft"
                    }}>Cast</h2> */}
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="people-gallery wow fadeInDown"
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
                            items: 5,
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
                    {this.renderPeople()}
                    {/* <div className="people-container-item">
                        <NavLink to="/" className="people-container-item-direct">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">MackenziE Davis</h3>
                        </NavLink>
                    </div>
                    <div className="people-container-item">
                        <NavLink to="/">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">Arnold Schwarzenegger</h3>
                        </NavLink>
                    </div>
                    <div className="people-container-item">
                        <NavLink to="/">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">Arnold Schwarzenegger</h3>
                        </NavLink>
                    </div>
                    <div className="people-container-item">
                        <NavLink to="/">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">Arnold Schwarzenegger</h3>
                        </NavLink>
                    </div>
                    <div className="people-container-item">
                        <NavLink to="/">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">Arnold Schwarzenegger</h3>
                        </NavLink>
                    </div>
                    <div className="people-container-item">
                        <NavLink to="/">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">Arnold Schwarzenegger</h3>
                        </NavLink>
                    </div>
                    <div className="people-container-item">
                        <NavLink to="/">
                            <img src="https://image.tmdb.org/t/p/w154/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" style={{ width: "120px", height: "160px" }} />
                            <h3 className="people-container-item__item-title">Arnold Schwarzenegger</h3>
                        </NavLink>
                    </div> */}

                </Carousel>
            </div>
        )
    }
}