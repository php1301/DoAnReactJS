import React, { Component, Fragment } from 'react';
import "../MainContent/MainContent.scss"
// import Upcoming from '../Upcoming/Upcoming';
// import Popular from '../Popular/Popular';
// import NowPlaying from '../NowPlaying/NowPlaying';
// import TopRated from '../TopRated/TopRated';
import { connect } from 'react-redux';
import * as action2 from "../../actions/movieActions/getUpcoming";
import * as action3 from "../../actions/movieActions/getPopular";
import * as action4 from "../../actions/movieActions/getNowPlaying";
import * as action5 from "../../actions/movieActions/getTopRated";
import Carousel from '../Carousel/Carousel';
import Title from '../Title/Title';
import News from '../News/News';
import Stuff from '../Stuff/Stuff';
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
class MainContent extends Component {
    componentDidMount() {
        this.props.onSaveNowPlaying()
        this.props.onSavePopular()
        this.props.onSaveUpcoming()
        this.props.onSaveTopRated()
    }
    renderItem = () => {

    }
    render() {
        return (
            <div className="main-content-container">
                {this.props.renderItem === true ? (
                    <Fragment>
                        <Title title={"Upcoming"} />
                        <Carousel items={this.props.upcoming} />
                        <HrLine />
                        <Title title={"Popular"} />
                        <Carousel items={this.props.popular} />
                        <HrLine />
                        <Title title={"Now Playing"} />
                        <Carousel items={this.props.nowPlaying} />
                        <HrLine />
                        <Title title={"Top rated"} />
                        <Carousel items={this.props.topRated} />
                        <HrLine />
                        <News items={this.props.popular} boxItems={this.props.nowPlaying} />
                        <HrLine />
                    </Fragment>) : (
                        <div className="wow fadeIn" data-wow-duration="3s">
                            <Stuff />
                        </div>
                    )
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        nowPlaying: state.getNowPlaying.result.results,
        popular: state.getPopular.result.results,
        upcoming: state.getUpcoming.result.results,
        topRated: state.getTopRated.result.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveUpcoming: () => {
            dispatch(action2.getUpcoming())
        },
        onSavePopular: () => {
            dispatch(action3.getPopular())
        },
        onSaveNowPlaying: () => {
            dispatch(action4.getNowPlaying())
        },
        onSaveTopRated: () => {
            dispatch(action5.getTopRated())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContent)