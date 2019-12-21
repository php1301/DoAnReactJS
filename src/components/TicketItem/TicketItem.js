import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
// import SliderContent from './SliderContent'
import Slider from 'react-slick'
import Movies from '../Movies/Movies';
import "../TicketItem/TicketItem.scss"

class SliderCarousel extends Component {
 
  render() {
    return (
      <section id="rt-showcase-surround">
        <div id="rt-showcase" className="slider-container rt-overlay-dark">
          <div className="rt-container slider-container">
            <div className="rt-grid-12 rt-alpha rt-omega">
              <link
                rel="stylesheet"
                // href="http://cssslider.com/sliders/demo-28/engine1/style.css"
              />
              {/*[if IE]><link rel="stylesheet" href="http://cssslider.com/sliders/demo-28/engine1/ie.css"><![endif]*/}
              {/*[if lte IE 9]><![endif]*/}
              <div className="csslider1 autoplay ">
                <input
                  name="cs_anchor1"
                  id="cs_slide1_0"
                  type="radio"
                  className="cs_anchor slide"
                />
                <input
                  name="cs_anchor1"
                  id="cs_slide1_1"
                  type="radio"
                  className="cs_anchor slide"
                />
                <input
                  name="cs_anchor1"
                  id="cs_slide1_2"
                  type="radio"
                  className="cs_anchor slide"
                />
                <input
                  name="cs_anchor1"
                  id="cs_play1"
                  type="radio"
                  className="cs_anchor"
                  defaultChecked
                />
                <input
                  name="cs_anchor1"
                  id="cs_pause1_0"
                  type="radio"
                  className="cs_anchor pause"
                />
                <input
                  name="cs_anchor1"
                  id="cs_pause1_1"
                  type="radio"
                  className="cs_anchor pause"
                />
                <input
                  name="cs_anchor1"
                  id="cs_pause1_2"
                  type="radio"
                  className="cs_anchor pause"
                />
                <ul>
                  <li className="cs_skeleton">
                    <img
                      src="http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg"
                      style={{ width: "100%" }}
                    />
                  </li>
                  <li className="num0 img slide">
                    <img
                      src="http://cssslider.com/sliders/demo-28/data1/images/scooter593155_1280.jpg"
                      alt="Carousel jQuery"
                      title="Scooter"
                    />
                  </li>
                  <li className="num1 img slide">
                    <img
                      src="http://cssslider.com/sliders/demo-28/data1/images/vespa498247_1280.jpg"
                      alt="Responsive Carousel jQuery"
                      title="Scooter"
                    />
                  </li>
                  <li className="num2 img slide">
                    <img
                      src="http://cssslider.com/sliders/demo-28/data1/images/scooter404111_1280.jpg"
                      alt="Carousel HTML jQuery"
                      title="Scooter"
                    />
                  </li>
                </ul>
                <div className="cs_description">
                  <label className="num0">
                    <span className="cs_title">
                      <span className="cs_wrapper">Scooter</span>
                    </span>
                    <br />
                    <span className="cs_descr">
                      <span className="cs_wrapper">Vintage</span>
                    </span>
                  </label>
                  <label className="num1">
                    <span className="cs_title">
                      <span className="cs_wrapper">Scooter</span>
                    </span>
                    <br />
                    <span className="cs_descr">
                      <span className="cs_wrapper">Vespa</span>
                    </span>
                  </label>
                  <label className="num2">
                    <span className="cs_title">
                      <span className="cs_wrapper">Scooter</span>
                    </span>
                    <br />
                    <span className="cs_descr">
                      <span className="cs_wrapper">Street</span>
                      <div className="cs_wrapper">Street</div>
                      <div className="cs_wrapper">Street</div>
                    </span>
                  </label>
                </div>
                <div className="cs_arrowprev">
                  <label className="num0" htmlFor="cs_slide1_0">
                    <span>
                      <i />
                      <b />
                    </span>
                  </label>
                  <label className="num1" htmlFor="cs_slide1_1">
                    <span>
                      <i />
                      <b />
                    </span>
                  </label>
                  <label className="num2" htmlFor="cs_slide1_2">
                    <span>
                      <i />
                      <b />
                    </span>
                  </label>
                </div>
                <div className="cs_arrownext">
                  <label className="num0" htmlFor="cs_slide1_0">
                    <span>
                      <i />
                      <b />
                    </span>
                  </label>
                  <label className="num1" htmlFor="cs_slide1_1">
                    <span>
                      <i />
                      <b />
                    </span>
                  </label>
                  <label className="num2" htmlFor="cs_slide1_2">
                    <span>
                      <i />
                      <b />
                    </span>
                  </label>
                </div>
                <div className="cs_bullets">
                  <label className="num0" htmlFor="cs_slide1_0">
                    <span className="cs_point" />
                    <span className="cs_thumb">
                      <img
                        src="http://cssslider.com/sliders/demo-28/data1/tooltips/scooter593155_1280.jpg"
                        alt="Scooter"
                        title="Scooter"
                      />
                    </span>
                  </label>
                  <label className="num1" htmlFor="cs_slide1_1">
                    <span className="cs_point" />
                    <span className="cs_thumb">
                      <img
                        src="http://cssslider.com/sliders/demo-28/data1/tooltips/vespa498247_1280.jpg"
                        alt="Scooter"
                        title="Scooter"
                      />
                    </span>
                  </label>
                  <label className="num2" htmlFor="cs_slide1_2">
                    <span className="cs_point" />
                    <span className="cs_thumb">
                      <img
                        src="http://cssslider.com/sliders/demo-28/data1/tooltips/scooter404111_1280.jpg"
                        alt="Scooter"
                        title="Scooter"
                      />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
      </section>

    )
  }
}

export default SliderCarousel
