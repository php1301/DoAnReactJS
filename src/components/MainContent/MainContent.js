import React, { Component } from 'react';
// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import "../MainContent/MainContent.scss"
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
export default class MainContent extends Component {
    render() {
        return (

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="main-content-gallery"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass="padding-left-400px"
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
        )
    }
}