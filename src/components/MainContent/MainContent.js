import React, { Component } from 'react';
import "../MainContent/MainContent.scss"
// import Upcoming from '../Upcoming/Upcoming';
// import Popular from '../Popular/Popular';
// import NowPlaying from '../NowPlaying/NowPlaying';
// import TopRated from '../TopRated/TopRated';
import Carousel from '../Carousel/Carousel';
import Title from '../Title/Title';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1255 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1255, min: 705 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 705, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
const HrLine = () => (

    <hr style={{
        backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
        border: "none",
        height: "2px"
    }}
    />
)

/**Em có thể tìm hieu thu viện styled component nha, nó sẽ hỗ trợ viết các inlinestyle như thế này + đọc prop */
// const Title = () => (
//     <h2 style={{
//         color: "#fff",
//         fontFamily: "Alegreya Sans, sans-serif",
//         fontSize: "1.2rem",
//         fontWeight: "bold",
//         letterSpacing: "0.4rem",
//         marginBottom: "2rem",
//         textTransform: "uppercase",
//         marginLeft: "-55px"
//     }}
//     > </h2>
// )
export default class MainContent extends Component {
    render() {
        return (
            <div className="main-content-container">
                <Title title={"Upcoming"}/>
                <Carousel />
                <HrLine />
                <Title title={"Popular"}/>
                <Carousel />
                <HrLine/>
                <Title title={"Now Playing"}/>
                <Carousel />
                <HrLine/>
                <Title title={"Top rated"}/>
                <Carousel />
                <HrLine/>
                {/* <Popular />
                <HrLine />
                <NowPlaying/>
                <HrLine />
                <TopRated />
                <HrLine /> */}
            </div>
        )
    }
}