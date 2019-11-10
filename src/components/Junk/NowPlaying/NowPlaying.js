import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import * as action from "../../actions/detailMovies";
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
class NowPlaying extends Component {
    componentDidMount() {
        this.props.onSavelistMovie()
    }
    renderHTML = () => {
        console.log(this.props.listMovies)
        return this.props.listMovies && this.props.listMovies.map((item, index) => {
            return <Movies key={index} movie={item} />
        })
    }
    render() {
        return (
            <div>
                {/* {this.renderHTML()} */}
                <Movies listMovies={this.props.listMovies}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        listMovies: state.movieReducer.listMovies //can duyet mang listmovies
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSavelistMovie: () => {
            dispatch(action.actOnSaveListMoviesAPI())
        }
    }
}// o day hieu la can props chạy hành động gì thay vì cần bắn hành động gì lên
export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)