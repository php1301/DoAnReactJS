import React, { Component, Fragment } from 'react'
import GalleryItem from './GalleryItem'
import Gallery from './Gallery'

export default class GalleryContainer extends Component {
    render() {
        return (
            <Fragment>
                {this.props.renderItem === true ? (
                    <div>
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
