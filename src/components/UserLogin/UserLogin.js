import React, { Component } from 'react';
import '../UserLogin/UserLogin.scss';
export default class UserLogin extends Component{
    render(){
        return(
            <div className="user-log-in">

            <div className="user-log-in-container">
    
              <header className="user-log-in-container-header">
                <img className="user-log-in-container-header__logo" src="http://www.demo.gloriathemes.com/wp/themovie/wp-content/themes/themovie/assets/img/logo-alternative.png" alt="logo" />
                <h1 className="user-log-in-container-header__title">Log In</h1>
                <h2 className="user-log-in-container-header__name">Film Cloud</h2>
              </header>
    
              <div className="user-log-in-container-content">
                <a href="#">
                  <button className="user-log-in-container-content__button">Facebook Log In</button>
                </a>
              </div>
    
              <p className="user-log-in-container-content__warning">Log In now to have access to limited features</p>
    
            </div>
    
            <div className="user-log-in-side-image">
              <h2 className="user-log-in-side-image__title">Browse and rate your favorite shows</h2>
            </div>
    
          </div>
        )
    }
}