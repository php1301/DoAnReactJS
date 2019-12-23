import React, { Component, Fragment } from 'react'
import '../Toggle/Toggle.scss'
export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderGallery: this.props.renderGallery

        }
    }
    toggle = () => {
        this.setState(prevState => ({
            renderGallery: !prevState.renderGallery

        }), () => this.props.handleGallery(this.state.renderGallery))

    }
    componentDidMount() {

        document.addEventListener('touchmove', function (e) { }, false);

        var _switch = document.getElementById("switch-1"),
            switchHit = false,
            hasTouch = false;

        function toggleHit() { if (!switchHit) { switchHit = true; _switch.classList.add("hit"); } }
        function setTouch() { if (!hasTouch) { hasTouch = true; _switch.classList.add("touch"); } }

        _switch.onclick = toggleHit;
        _switch.ontouchstart = function (e) { setTouch(); e.preventDefault(); e.target.click(); }
    }
    render() {
        return (
            <Fragment>
            <div className="toggleButton">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "1052px" }} data-text={"Curious what is this...?"} class="main-content-container__title glitch " >{"Curious what is this...?"}</h2>
                <input onClick={() => this.toggle()} type="checkbox" class="switch" id="switch-1" />
            </div>
            </Fragment>
        )
    }
}
