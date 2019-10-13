import React, { Component } from 'react';
import "../Home/Home.scss";
import Loader from '../Loader/Loader';
import Mainnav from '../MainNav/MainNav';
import HomeHeader from '../HomeHeader/HomeHeader';
export default class Home extends Component{
    render(){
        return(
            <div>
                <Loader/>
            <div>
                <Mainnav/>
                <HomeHeader/>
            </div>
            </div>
        );
    }
}