import React, { Component } from 'react';
import "../ItemController/ItemController.scss";
export default class ItemController extends Component {
    render() {
        return (
            <div className="item-controller-content">
                <button
                    className="item-controller__switch wow fadeInDown"
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}>Movies</button>
                <button
                    className="item-controller__switch wow fadeInDown"
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                    style={{
                        visibility: "visible",
                        animationDuration: "1s",
                        animationDelay: "0.5s",
                        animationName: "fadeInDown"
                    }}>TV Shows</button>
            </div>
        );
    }
}