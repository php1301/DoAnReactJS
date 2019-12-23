import React, { Component, Fragment } from 'react'
const HrLine = () => (

    <hr style={{
        backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
        border: "none",
        height: "2px"
    }}
    />
)
export default class BoxAbout extends Component {
    render() {
        return (
            <Fragment>
                {this.props.renderGallery === true ? (
                    <Fragment>
            <div className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"ONCE UPON A TIME"} class="main-content-container__title glitch " >ONCE UPON A TIME</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"THERE WAS A BORED CODER"} class="main-content-container__title glitch " >There was a bored Coder</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"Every day, after very long hours spent coding different projects"} class="main-content-container__title glitch " >Every day, after very long hours spent coding different projects</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"sometimes for his dreams software, most of the times his nightmares"} class="main-content-container__title glitch " >sometimes for his dreams software, 
            most of the times his nightmares</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"(we all need money, right ?!)"} class="main-content-container__title glitch " >(we all need money, right ?!)</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"he would watched a movie and try to escape his mind."} class="main-content-container__title glitch " >he would watched a movie and try to escape his mind.</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"And so... He created this Moive Booking Website"} class="main-content-container__title glitch " >And so... He created this Moive Booking Website</h2>
            </div>
            <div style={{marginTop: "60px"}} className="wow fadeIn" data-wow-duration="3s">
                <h2 style={{ textAlign: "center", marginLeft: "20px", marginTop: "30px" }} data-text={"Enjoy... :)"} class="main-content-container__title glitch " >{"Enjoy...:)"}</h2>
            </div>
            <HrLine/>
            </Fragment>
            ) : ""}
            </Fragment>
        )
    }
}
