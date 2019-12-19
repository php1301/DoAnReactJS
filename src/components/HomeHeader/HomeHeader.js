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
    // componentDidMount() {
    //     // set and cache variables
    //     var w, container, carousel, item, radius, itemLength, rY, ticker, fps;
    //     var mouseX = 0;
    //     var mouseY = 0;
    //     var mouseZ = 0;
    //     var addX = 0;


    //     // fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
    //     // no need to create my own :)
    //     var fps_counter = {

    //         tick: function () {
    //             // this has to clone the array every tick so that
    //             // separate instances won't share state 
    //             this.times = this.times.concat(+new Date());
    //             var seconds, times = this.times;

    //             if (times.length > this.span + 1) {
    //                 times.shift(); // ditch the oldest time
    //                 seconds = (times[times.length - 1] - times[0]) / 1000;
    //                 return Math.round(this.span / seconds);
    //             }
    //             else return null;
    //         },

    //         times: [],
    //         span: 20
    //     };
    //     var counter = Object.create(fps_counter);



    //     $(document).ready(init)

    //     function init() {
    //         w = $(window);
    //         container = $('#contentContainer');
    //         carousel = $('#carouselContainer');
    //         item = $('.carouselItem');
    //         itemLength = $('.carouselItem').length;
    //         fps = $('#fps');
    //         rY = 360 / itemLength;
    //         radius = Math.round((250) / Math.tan(Math.PI / itemLength));

    //         // set container 3d props
    //         TweenMax.set(container, { perspective: 600 })
    //         TweenMax.set(carousel, { z: -(radius) })

    //         // create carousel item props

    //         for (var i = 0; i < itemLength; i++) {
    //             var $item = item.eq(i);
    //             var $block = $item.find('.carouselItemInner');

    //             //thanks @chrisgannon!        
    //             TweenMax.set($item, { rotationY: rY * i, z: radius, transformOrigin: "50% 50% " + -radius + "px" });

    //             animateIn($item, $block)
    //         }

    //         // set mouse x and y props and looper ticker
    //         window.addEventListener("mousemove", onMouseMove, false);
    //         ticker = setInterval(looper, 1000 / 60);
    //     }

    //     function animateIn($item, $block) {
    //         var $nrX = 360 * getRandomInt(2);
    //         var $nrY = 360 * getRandomInt(2);

    //         var $nx = -(2000) + getRandomInt(4000)
    //         var $ny = -(2000) + getRandomInt(4000)
    //         var $nz = -4000 + getRandomInt(4000)

    //         var $s = 1.5 + (getRandomInt(10) * .1)
    //         var $d = 1 - (getRandomInt(8) * .1)

    //         TweenMax.set($item, { autoAlpha: 1, delay: $d })
    //         TweenMax.set($block, { z: $nz, rotationY: $nrY, rotationX: $nrX, x: $nx, y: $ny, autoAlpha: 0 })
    //         TweenMax.to($block, $s, { delay: $d, rotationY: 0, rotationX: 0, z: 0, ease: Expo.easeInOut })
    //         TweenMax.to($block, $s - .5, { delay: $d, x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut })
    //     }

    //     function onMouseMove(event) {
    //         mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
    //         mouseY = -(-(window.innerHeight * .5) + event.pageY) * .01;
    //         mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY) - 200);
    //     }

    //     // loops and sets the carousel 3d properties
    //     function looper() {
    //         addX += mouseX
    //         TweenMax.to(carousel, 1, { rotationY: addX, rotationX: mouseY, ease: Quint.easeOut })
    //         TweenMax.set(carousel, { z: mouseZ })
    //         fps.text('Framerate: ' + counter.tick() + '/60 FPS')
    //     }

    //     function getRandomInt($n) {
    //         return Math.floor((Math.random() * $n) + 1);
    //     }
    // }
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