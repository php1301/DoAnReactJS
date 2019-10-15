import React, { Component } from 'react';
import "../MainContent/MainContent.scss"
import Upcoming from '../Upcoming/Upcoming';
import Popular from '../Popular/Popular';
import NowPlaying from '../NowPlaying/NowPlaying';
import TopRated from '../TopRated/TopRated';
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
const HrLine = () => (

    <hr style={{
        backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
        border: "none",
        height: "2px"
    }}
    />
)
export default class MainContent extends Component {
    render() {
        return (
            <div>
            <Upcoming />
            <HrLine/>
            <Popular/>
            <HrLine/>
            <NowPlaying/>
            <HrLine/>
            <TopRated/>
            <HrLine/>
            </div>
        )
    }
}