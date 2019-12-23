import React, { Component } from 'react';
import "../Home/Home.scss";
import Loader from '../Loader/Loader';
import MainNav from '../MainNav/MainNav';
import HomeHeader from '../HomeHeader/HomeHeader';
import ItemController from '../ItemController/ItemController';
import MainContent from '../MainContent/MainContent';
import MainFooter from '../MainFooter/MainFooter';
import Hotline from '../Hotline/Hotline';
import News from '../News/News';
import TicketItem from "../TicketItem/TicketItem"
import Gallery from '../Gallery/Gallery';
import GalleryItem from '../Gallery/GalleryItem';
import Toggle from "../Toggle/Toggle"
import CardGallery from '../CardGallery/CardGallery';
import GalleryContainer from '../Gallery/GalleryContainer';
import TicketContainer from '../TicketItem/TicketContainer';
import CardSlider from '../CardSlider/CardSlider';
import BoxAbout from '../BoxAbout/BoxAbout';
var Snow = require('react-snow-effect');
const HrLine = () => (

    <hr style={{
        backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
        border: "none",
        height: "2px"
    }}
    />
)

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderItem: true,
            renderGallery: false,
        }
    }
    handleRender = (booleanVal) => {
        console.log('parent', booleanVal);
        this.setState({
            renderItem: booleanVal,
        });
    }
    handleGallery = (booleanVal) => {
        console.log('parent', booleanVal);
        this.setState({
            renderGallery: booleanVal
        });
    }
    render() {
        return (
            <div>
                <Loader />
                <Snow />
                <div className="home-container">
                    <MainNav />
                    <HomeHeader />
                    <ItemController renderItem={this.state.renderItem} handleRender={this.handleRender} />
                    <MainContent renderItem={this.state.renderItem} />
                    <TicketContainer renderItem={this.state.renderItem} />
                    <CardGallery renderGallery={this.state.renderGallery} renderItem={this.state.renderItem} />
                    <CardSlider renderItem={this.state.renderItem} />
                    <Toggle renderGallery={this.state.renderGallery} handleGallery={this.handleGallery} />
                    <BoxAbout renderGallery={this.state.renderGallery} />
                    {/* <HrLine/> */}
                    {/* <GalleryContainer renderGallery={this.state.renderGallery} renderItem={this.state.renderItem} /> */}
                    <MainFooter />
                    <Hotline />
                </div>
            </div>
        );
    }
}
