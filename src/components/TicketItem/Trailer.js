import React, { Component } from 'react'
import * as action3 from "../../actions/movieActions/getTrailers";
import { connect } from 'react-redux'

class Trailer extends Component {
    componentDidMount() {
        let id = this.props.id
        this.props.onSaveTrailers(id)
    }
    renderItems = () => {
        return this.props.trailers && this.props.trailers.map((item, index) => {
            if (this.props.trailers.length < 1)
                return (
                    <h3>No Trailers found</h3>
                )
            if (index === 0)
                return (
                    <div>
                        <iframe width="840" height="315" src={`https://www.youtube.com/embed/${item.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                )

        })
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        trailers: state.getTrailers.result.results,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSaveTrailers: id => {
            dispatch(action3.getTrailersAPI(id))
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trailer)