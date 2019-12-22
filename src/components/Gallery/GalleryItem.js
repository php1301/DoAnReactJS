import React, { Component, Fragment } from 'react'
import '../Gallery/Gallery.scss'
import { NavLink, Link } from 'react-router-dom';
import * as action2 from "../../actions/movieActions/getUpcoming";
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

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        }
    }
    componentDidMount() {
        this.props.onSaveNowPlaying()
        this.props.onSaveUpcoming()
    }
    renderItems = () => {
        return this.props.nowPlaying && this.props.nowPlaying.map((item, index) => {
            { this.something() }
            if (index > 0 && index <= 4) {
                console.log("work")
                return (

                    < li > <a href data-order={index} data-imagesrc={`http://image.tmdb.org/t/p/w1280//${item.backdrop_path}`} /></li >

                )
            }
        })
    }
    something = () => {

        'use strict';

        /* global TweenMax, Power1 */


        //DOM
        var canvas0 = document.getElementById('canvas0'),
            ctx0 = canvas0.getContext('2d'),
            canvas1 = document.getElementById('canvas1'),
            ctx1 = canvas1.getContext('2d'),
            canvas2 = document.getElementById('canvas2'),
            ctx2 = canvas2.getContext('2d'),
            canvas3 = document.getElementById('canvas3'),
            ctx3 = canvas3.getContext('2d'),
            linklist = document.querySelector('.link-list'),
            btns = document.querySelector('.btns'),
            nextBtn = btns.querySelector('.show-next'),
            loadTxt = document.querySelector('.loading-txt');;


        // CONST
        var VW, VH, AR;
        var IS_ACTIVE = 'is-active';


        // VARS
        var isAnimating = false,
            currentImage = 0,
            prevImage = 0,
            currentLink,
            imagesloaded = 0,
            partMove = {
                val: 1
            };
        var slideshowInterval;


        // IMAGES STUFF
        var imagesList = [],
            linkList = [];
        var imgW, imgH, IAR;


        // CANVAS STUFF
        var partList = [{
            context: ctx1,
            xpos: 100,
            radius: 0 // circumference of mask1
        }, {
            context: ctx2,
            xpos: -70,
            radius: 0 // circumference of mask2
        }, {
            context: ctx3,
            xpos: 50,
            radius: 0 // circumference of mask3
        }];








        function drawImages() {

            var imgPrev = imagesList[prevImage];
            var imgNext = imagesList[currentImage];

            // This is Next
            ctx0.globalAlpha = 1;
            ctx0.drawImage(imgNext, 0, 0, imgW, imgH);

            // This is Prev
            ctx0.globalAlpha = partMove.val;
            ctx0.drawImage(imgPrev, 0, 0, imgW, imgH);



            var obj, ctx, xPrev, xNext;
            for (var i = 0; i < partList.length; i++) {

                obj = partList[i];
                ctx = obj.context;
                xPrev = -obj.xpos * (1 - partMove.val);
                xNext = obj.xpos * partMove.val;

                ctx.clearRect(0, 0, VW, VH);

                ctx.save();
                ctx.beginPath();
                ctx.arc(VW / 2, VH / 2, obj.radius, 0, 2 * Math.PI, false);
                ctx.fill();

                // This is Next
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-in';
                ctx.drawImage(imgNext, xNext, 0, imgW, imgH);

                // This is Prev
                ctx.globalAlpha = partMove.val;
                ctx.globalCompositeOperation = 'source-atop';
                ctx.drawImage(imgPrev, xPrev, 0, imgW, imgH);


                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 1;

                if (i === 0) {
                    // 				if (i !== partList.length-1) {
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = '#fff';
                    ctx.stroke();
                }

                // ctx.restore();

            }
        }

        function changeImage() {

            // Do not interupt previous movement
            if (isAnimating) {
                return;
            }

            isAnimating = true;

            TweenMax.to(partMove, 1, {
                val: 0,
                ease: Power1.easeInOut,
                onUpdate: drawImages,
                onComplete: function () {
                    partMove.val = 1;
                    isAnimating = false;
                }
            });

        }



        function onBtnsClick(e) {

            e.preventDefault();
            // Do not interupt previous animation
            if (isAnimating) {
                return;
            }

            var trgt = e.target;
            if (trgt.nodeName === 'BUTTON') {

                prevImage = currentImage;

                if (trgt.classList.contains('show-next')) {
                    (currentImage + 1 >= imagesList.length) ? currentImage = 0 : currentImage++;
                } else {
                    (currentImage - 1 < 0) ? currentImage = imagesList.length - 1 : currentImage--;
                }

                changeImage();
                selectLink();

                clearInterval(slideshowInterval);
            }



        }

        function onListClick(e) {

            e.preventDefault();

            // Do not interupt previous animation
            if (isAnimating) {
                return;
            }

            var trgt = e.target;

            if (trgt.nodeName === 'A') {

                prevImage = currentImage;
                currentImage = parseInt(trgt.getAttribute('data-order'), 10);
                changeImage();

                selectLink();

                clearInterval(slideshowInterval);
            }
        }

        function selectLink() {

            if (currentLink !== undefined) {
                currentLink.classList.remove(IS_ACTIVE);
            }
            currentLink = linkList[currentImage];
            currentLink.classList.add(IS_ACTIVE);

        }



        function calculateScreen() {
            VW = window.innerWidth;
            VH = window.innerHeight;
            AR = VW / VH;

            canvas0.width = canvas1.width = canvas2.width = canvas3.width = VW;
            canvas0.height = canvas1.height = canvas2.height = canvas3.height = VH;

            partList[0].radius = VW * 0.4;
            partList[1].radius = VW * 0.25;
            partList[2].radius = VW * 0.08;
        }

        function resizeBg() {
            var image1 = imagesList[0];
            IAR = image1.width / image1.height;
            if (IAR < AR) {
                imgW = VW;
                imgH = VW / IAR;
            } else {
                imgW = VH * IAR;
                imgH = VH;
            }
        }

        function slideshowChange() {
            prevImage = currentImage;
            (currentImage + 1 >= imagesList.length) ? currentImage = 0 : currentImage++;
            changeImage();
            selectLink();
        }

        function addEL() {

            var debounceResize = debounce(function () {
                calculateScreen();
                resizeBg();
                changeImage();
            }, 200);

            window.addEventListener('resize', debounceResize);
            btns.addEventListener('click', onBtnsClick);
            linklist.addEventListener('click', onListClick);

        }


        function preloadImages() {
            imagesList.forEach(function (img) {

                if (img.complete) {
                    handleImageComplete();

                } else {
                    img.onload = handleImageComplete;
                }

            });
        }

        function handleImageComplete() {
            imagesloaded++;
            if (imagesloaded === imagesList.length) {
                loadTxt.classList.add('is-hidden');
                addEL();
                init();
            }
        }

        function init() {

            calculateScreen();
            resizeBg();
            selectLink();
            changeImage();
            slideshowInterval = setInterval(slideshowChange, 3000);
        }


        function preInit() {
            var alist = linklist.querySelectorAll('a');
            var img;

            for (var i = 0; i < alist.length; i++) {

                linkList.push(alist[i]);

                img = new Image();
                img.src = alist[i].getAttribute('data-imagesrc');
                imagesList.push(img);

            }

            preloadImages();
        }

        preInit();



        /**
         * Helpers
         */

        // http://davidwalsh.name/javascript-debounce-function
        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    };


    componentDidMount() {
        (function () {

            'use strict';

            /* global TweenMax, Power1 */


            //DOM
            var canvas0 = document.getElementById('canvas0'),
                ctx0 = canvas0.getContext('2d'),
                canvas1 = document.getElementById('canvas1'),
                ctx1 = canvas1.getContext('2d'),
                canvas2 = document.getElementById('canvas2'),
                ctx2 = canvas2.getContext('2d'),
                canvas3 = document.getElementById('canvas3'),
                ctx3 = canvas3.getContext('2d'),
                linklist = document.querySelector('.link-list'),
                btns = document.querySelector('.btns'),
                nextBtn = btns.querySelector('.show-next'),
                loadTxt = document.querySelector('.loading-txt');;


            // CONST
            var VW, VH, AR;
            var IS_ACTIVE = 'is-active';


            // VARS
            var isAnimating = false,
                currentImage = 0,
                prevImage = 0,
                currentLink,
                imagesloaded = 0,
                partMove = {
                    val: 1
                };
            var slideshowInterval;


            // IMAGES STUFF
            var imagesList = [],
                linkList = [];
            var imgW, imgH, IAR;


            // CANVAS STUFF
            var partList = [{
                context: ctx1,
                xpos: 100,
                radius: 0 // circumference of mask1
            }, {
                context: ctx2,
                xpos: -70,
                radius: 0 // circumference of mask2
            }, {
                context: ctx3,
                xpos: 50,
                radius: 0 // circumference of mask3
            }];








            function drawImages() {

                var imgPrev = imagesList[prevImage];
                var imgNext = imagesList[currentImage];

                // This is Next
                ctx0.globalAlpha = 1;
                ctx0.drawImage(imgNext, 0, 0, imgW, imgH);

                // This is Prev
                ctx0.globalAlpha = partMove.val;
                ctx0.drawImage(imgPrev, 0, 0, imgW, imgH);



                var obj, ctx, xPrev, xNext;
                for (var i = 0; i < partList.length; i++) {

                    obj = partList[i];
                    ctx = obj.context;
                    xPrev = -obj.xpos * (1 - partMove.val);
                    xNext = obj.xpos * partMove.val;

                    ctx.clearRect(0, 0, VW, VH);

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(VW / 2, VH / 2, obj.radius, 0, 2 * Math.PI, false);
                    ctx.fill();

                    // This is Next
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = 'source-in';
                    ctx.drawImage(imgNext, xNext, 0, imgW, imgH);

                    // This is Prev
                    ctx.globalAlpha = partMove.val;
                    ctx.globalCompositeOperation = 'source-atop';
                    ctx.drawImage(imgPrev, xPrev, 0, imgW, imgH);


                    ctx.globalCompositeOperation = 'source-over';
                    ctx.globalAlpha = 1;

                    if (i === 0) {
                        // 				if (i !== partList.length-1) {
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = '#fff';
                        ctx.stroke();
                    }

                    // ctx.restore();

                }
            }

            function changeImage() {

                // Do not interupt previous movement
                if (isAnimating) {
                    return;
                }

                isAnimating = true;

                TweenMax.to(partMove, 1, {
                    val: 0,
                    ease: Power1.easeInOut,
                    onUpdate: drawImages,
                    onComplete: function () {
                        partMove.val = 1;
                        isAnimating = false;
                    }
                });

            }



            function onBtnsClick(e) {

                e.preventDefault();
                // Do not interupt previous animation
                if (isAnimating) {
                    return;
                }

                var trgt = e.target;
                if (trgt.nodeName === 'BUTTON') {

                    prevImage = currentImage;

                    if (trgt.classList.contains('show-next')) {
                        (currentImage + 1 >= imagesList.length) ? currentImage = 0 : currentImage++;
                    } else {
                        (currentImage - 1 < 0) ? currentImage = imagesList.length - 1 : currentImage--;
                    }

                    changeImage();
                    selectLink();

                    clearInterval(slideshowInterval);
                }



            }

            function onListClick(e) {

                e.preventDefault();

                // Do not interupt previous animation
                if (isAnimating) {
                    return;
                }

                var trgt = e.target;

                if (trgt.nodeName === 'A') {

                    prevImage = currentImage;
                    currentImage = parseInt(trgt.getAttribute('data-order'), 10);
                    changeImage();

                    selectLink();

                    clearInterval(slideshowInterval);
                }
            }

            function selectLink() {

                if (currentLink !== undefined) {
                    currentLink.classList.remove(IS_ACTIVE);
                }
                currentLink = linkList[currentImage];
                currentLink.classList.add(IS_ACTIVE);

            }



            function calculateScreen() {
                VW = window.innerWidth;
                VH = window.innerHeight;
                AR = VW / VH;

                canvas0.width = canvas1.width = canvas2.width = canvas3.width = VW;
                canvas0.height = canvas1.height = canvas2.height = canvas3.height = VH;

                partList[0].radius = VW * 0.4;
                partList[1].radius = VW * 0.25;
                partList[2].radius = VW * 0.08;
            }

            function resizeBg() {
                var image1 = imagesList[0];
                IAR = image1.width / image1.height;
                if (IAR < AR) {
                    imgW = VW;
                    imgH = VW / IAR;
                } else {
                    imgW = VH * IAR;
                    imgH = VH;
                }
            }

            function slideshowChange() {
                prevImage = currentImage;
                (currentImage + 1 >= imagesList.length) ? currentImage = 0 : currentImage++;
                changeImage();
                selectLink();
            }

            function addEL() {

                var debounceResize = debounce(function () {
                    calculateScreen();
                    resizeBg();
                    changeImage();
                }, 200);

                window.addEventListener('resize', debounceResize);
                btns.addEventListener('click', onBtnsClick);
                linklist.addEventListener('click', onListClick);

            }


            function preloadImages() {
                imagesList.forEach(function (img) {

                    if (img.complete) {
                        handleImageComplete();

                    } else {
                        img.onload = handleImageComplete;
                    }

                });
            }

            function handleImageComplete() {
                imagesloaded++;
                if (imagesloaded === imagesList.length) {
                    loadTxt.classList.add('is-hidden');
                    addEL();
                    init();
                }
            }

            function init() {

                calculateScreen();
                resizeBg();
                selectLink();
                changeImage();
                slideshowInterval = setInterval(slideshowChange, 3000);
            }


            function preInit() {
                var alist = linklist.querySelectorAll('a');
                var img;

                for (var i = 0; i < alist.length; i++) {

                    linkList.push(alist[i]);

                    img = new Image();
                    img.src = alist[i].getAttribute('data-imagesrc');
                    imagesList.push(img);

                }

                preloadImages();
            }

            preInit();



            /**
             * Helpers
             */

            // http://davidwalsh.name/javascript-debounce-function
            function debounce(func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this,
                        args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }
        })();
    }
    render() {
        return (
            <Fragment>
                <div className={this.props.style === true ? "canvasGallery wow fadeIn" : "hide"} data-wow-duration="3s">
                    <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"GALLERY"} class="main-content-container__title glitch ">GALLERY</h2>
                    <HrLine />
                    <canvas id="canvas0" width={800} height={480} />
                    <canvas id="canvas1" width={800} height={480} />
                    <canvas id="canvas2" width={800} height={480} />
                    <canvas id="canvas3" width={800} height={480} />
                    <nav className="link-list">
                        <ul>
                            {/* {this.renderItems()} */}
                            {/* {this.something()} */}
                            <li><Link to data-order={0} data-imagesrc="http://image.tmdb.org/t/p/w1280///zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg" /></li>
                            <li><Link to data-order={1} data-imagesrc="http://image.tmdb.org/t/p/w1280///xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg" /></li>
                            <li><Link to data-order={2} data-imagesrc="http://image.tmdb.org/t/p/w1280///bga3i5jcejBekr2FCGJga1fYCh.jpg" /></li>
                            <li><Link to data-order={3} data-imagesrc="https://image.tmdb.org/t/p/w1280//dCB7d4l0mfpsISZvr6aPE2z5QF6.jpg" /></li>
                            <li><Link to data-order={4} data-imagesrc="https://image.tmdb.org/t/p/w1280//5BwqwxMEjeFtdknRV792Svo0K1v.jpg" /></li>
                        </ul>
                    </nav>
                    <nav className="btns">
                        <button className="show-prev"><span>PREV</span></button>
                        <button className="show-next"><span>NEXT</span></button>
                    </nav>
                    <p className="loading-txt">Loading images...</p>
                </div>
                )
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        genres: state.getGenres.result.genres,
        upcoming: state.getUpcoming.result.results,
        nowPlaying: state.getNowPlaying.result.results,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveUpcoming: () => {
            dispatch(action2.getUpcoming())
        },
        onSaveNowPlaying: () => {
            dispatch(action4.getNowPlaying())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)