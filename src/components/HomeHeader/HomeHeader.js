import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../HomeHeader/HomeHeader.scss';
export default class HomeHeader extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item >
                    <a>
                    <div className="Carousel-Item">
                    </div>
                    <img
                        className="d-block w-100"
                        src="https://image.tmdb.org/t/p/w1280/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg"
                        alt="First slide"
                        style={{
                            width: "1519px",
                            height: "500px"
                        }}
                    />
                    </a>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a>
                    <div className="Carousel-Item">
                    </div>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/w1280/t1Y6cder9jDjaJMV13GTttszaUg.jpg"
                            alt="Third slide"
                            style={{
                                width: "1519px",
                                height: "500px"
                            }}
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a>
                    <div className="Carousel-Item">
                    </div>
                        <img
                            className="d-block w-100"
                            src="https://image.tmdb.org/t/p/w1280/stemLQMLDrlpfIlZ5OjllOPT8QX.jpg"
                            alt="Third slide"
                            style={{
                                width: "1519px",
                                height: "500px"
                            }}
                        />
                    </a>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}