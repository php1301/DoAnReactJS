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

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderItem: true
        }
    }
    handleRender = (booleanVal) => {
        console.log('parent', booleanVal);
        this.setState({
            renderItem: booleanVal
        });
    }
    render() {
        return (
            <div>
                <Loader />
                <div className="home-container">
                    <MainNav />
                    {/* <TicketItem /> */}
                    <HomeHeader />
                    <ItemController renderItem={this.state.renderItem} handleRender={this.handleRender} />
                    <MainContent renderItem={this.state.renderItem} />
                    <MainFooter />
                    <Hotline />
                </div>
            </div>
        );
    }
}
