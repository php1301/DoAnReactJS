import React, { Component } from 'react';
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import * as action from "../../actions/movieActions/detailMovies";
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import * as action2 from "../../actions/movieActions/getUpcoming";
import * as action3 from "../../actions/movieActions/getPopular";
import * as action4 from "../../actions/movieActions/getNowPlaying";
import * as action5 from "../../actions/movieActions/getTopRated";
class Carousel extends Component {
    componentDidMount() {
        this.props.onSaveNowPlaying()
        this.props.onSavePopular()
        this.props.onSaveUpcoming() //prop này lay o dau vay em 
        this.props.onSaveTopRated()
    }
    render() {
        let { nowPlaying, popular, upcoming, topRated } = this.props
        return (
            <div>
                {/* {this.renderHTML()} */}
                {
                    this.props &&
                    <Movies
                        
                            items ={this.props.items}
                        
                    // upcoming={this.props.upcoming}
                    />
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
}// o day hieu la can props chạy hành động gì thay vì cần bắn hành động gì lên
export default connect(mapStateToProps, mapDispatchToProps)(Carousel)