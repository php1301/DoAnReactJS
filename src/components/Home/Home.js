import React, { Component } from 'react';
import "../Home/Home.scss";
import Loader from '../Loader/Loader';
import MainNav from '../MainNav/MainNav';
import HomeHeader from '../HomeHeader/HomeHeader';
import ItemController from '../ItemController/ItemController';
import MainContent from '../MainContent/MainContent';
export default class Home extends Component{
    render(){
        return(
            <div>
                <Loader/>
            <div className="home-container">
                <MainNav/>
                <HomeHeader/>
                <ItemController/>
                <MainContent/>
            </div>
            </div>
        );
    }
}