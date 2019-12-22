import React, { Component, Fragment } from 'react'
import GalleryItem from './GalleryItem'
import Gallery from './Gallery'

export default class GalleryContainer extends Component {
    render() {
        return (
            <Fragment>
                {this.props.renderItem === true && this.props.renderGallery === true ? (
                    <div className="wow fadeIn" data-wow-duration="3s">
                        <Gallery style={true} />
                        <GalleryItem style={true} />
                    </div>
                ) : <div>
                        <Gallery style={false} />
                        <GalleryItem style={false} />
                    </div>}
            </Fragment>
        )
    }
}
