import React, { Component } from 'react';
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import * as action from "../../actions/movieActions/detailMovies";
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import * as action2 from "../../actions/movieActions/getUpcoming";
class Carousel extends Component {
    componentDidMount() {
        this.props.onSavelistMovie()
        this.props.onSaveUpcoming() //prop này lay o dau vay em 
    }
    renderHTML = () => {
        console.log(this.props.listMovies)
        return this.props.upcoming && this.props.upcoming.map((item, index) => {
            return <Movies key={index} movie={item} />
        })
    }
    render() {
        return (
            <div>
                {/* {this.renderHTML()} */}
                {
                    this.props.upcoming &&
                    <Movies upcoming={this.props.upcoming} />
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        listMovies: state.movieReducer.listMovies, //can duyet mang listmovies
        upcoming : state.getUpcoming.result.results
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSavelistMovie: () => {
            dispatch(action.actOnSaveListMoviesAPI())
        },
        onSaveUpcoming: () => {
            dispatch(action2.getUpcoming())
    }
}
}// o day hieu la can props chạy hành động gì thay vì cần bắn hành động gì lên
export default connect(mapStateToProps, mapDispatchToProps)(Carousel)