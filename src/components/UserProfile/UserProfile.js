import React, { Component } from 'react'
import MainNav from '../MainNav/MainNav'
import Loader from '../Loader/Loader'
import "../UserProfile/UserProfile.scss";

export default class UserProfile extends Component {
    render() {
        return (

            <div className="user-profile">
                <MainNav />
                <div className="user-profile-container">
                    <aside className="user-profile-container-aside">
                        <nav className="user-profile-container-aside-nav">
                            <div className="user-profile-container-aside-nav-profile wow swing" data-wow-delay=".5s" data-wow-duration="5s">
                                <img className="user-profile-container-aside-nav-profile-image" src="http://filmcloud.xyz/static/media/profile-avatar.995ca3cc.jpeg" alt="user" />
                                <div className="user-profile-container-aside-nav-profile-info">
                                    <h2 className="user-profile-container-aside-nav-profile-info__user-name">Welcome</h2>
                                    <p className="user-profile-container-aside-nav-profile-info__user-type">Somebody</p>
                                </div>
                            </div>

                            <a to='/'>
                                <button className="user-profile-container-aside-nav-log-out wow fadeInUp" data-wow-delay=".5s" data-wow-duration="5s">Log Out</button>
                            </a>

                        </nav>
                    </aside>
                    <main className="user-profile-container-main">
                        <div className="user-profile-container-main-info">

                            <div className="user-profile-container-main-info-item">
                                <svg className="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z" /></svg>
                                <p className="user-profile-container-main-info-item-content"><span className="user-profile-container-main-info-item-content__number">{}</span> Favorite Movies</p>
                            </div>

                            <div className="user-profile-container-main-info-item">
                                <svg className="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z" /></svg>
                                <p className="user-profile-container-main-info-item-content"><span className="user-profile-container-main-info-item-content__number">{}</span> Favorite TV Shows</p>
                            </div>

                            <div className="user-profile-container-main-info-item">
                                <svg className="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg>
                                <p className="user-profile-container-main-info-item-content"><span className="user-profile-container-main-info-item-content__number">{}</span> Rated Movies</p>
                            </div>

                            <div className="user-profile-container-main-info-item">
                                <svg className="user-profile-container-main-info-item__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" /></svg>
                                <p className="user-profile-container-main-info-item-content"><span className="user-profile-container-main-info-item-content__number">{}</span> Rated TV Shows</p>
                            </div>

                        </div>
                        <div className="user-profile-container-main-content">
                            <div className="user-profile-container-main-container">
                                <header className="user-profile-container-main-container-header">
                                    <h3
                                        className="user-profile-container-main-container-header__title wow fadeIn"
                                        data-wow-duration="3s"
                                        style={{
                                            visibility: "visible",
                                            animationDuration: "3s",
                                            animationName: "fadeIn"
                                        }}
                                    >
                                        Favorite Movies
        </h3>
                                    <hr className="user-profile-container-main-container-header__separator" />
                                </header>
                                <div className="user-profile-container-main-container-item">
                                    <h3 className="user-profile-container-main-container-item-warning">
                                        No favorite movies found
        </h3>
                                </div>
                            </div>
                            <div className="user-profile-container-main-container">
                                <header className="user-profile-container-main-container-header">
                                    <h3
                                        className="user-profile-container-main-container-header__title wow fadeIn"
                                        data-wow-duration="3s"
                                        style={{
                                            visibility: "visible",
                                            animationDuration: "3s",
                                            animationName: "fadeIn"
                                        }}
                                    >
                                        TV Shows
        </h3>
                                    <hr className="user-profile-container-main-container-header__separator" />
                                </header>
                                <div className="user-profile-container-main-container-item">
                                    <h3 className="user-profile-container-main-container-item-warning">
                                        No favorite tv shows found
        </h3>
                                </div>
                            </div>
                            <div className="user-profile-container-main-container">
                                <header className="user-profile-container-main-container-header">
                                    <h3
                                        className="user-profile-container-main-container-header__title wow fadeIn"
                                        data-wow-duration="3s"
                                        style={{
                                            visibility: "visible",
                                            animationDuration: "3s",
                                            animationName: "fadeIn"
                                        }}
                                    >
                                        Movies Rated
        </h3>
                                    <hr className="user-profile-container-main-container-header__separator" />
                                </header>
                                <div className="user-profile-container-main-container-item">
                                    <h3 className="user-profile-container-main-container-item-warning">
                                        No rated movies found
        </h3>
                                </div>
                            </div>
                            <div className="user-profile-container-main-container">
                                <header className="user-profile-container-main-container-header">
                                    <h3
                                        className="user-profile-container-main-container-header__title wow fadeIn"
                                        data-wow-duration="3s"
                                        style={{
                                            visibility: "visible",
                                            animationDuration: "3s",
                                            animationName: "fadeIn"
                                        }}
                                    >
                                        TV Shows Rated
        </h3>
                                    <hr className="user-profile-container-main-container-header__separator" />
                                </header>
                                <div className="user-profile-container-main-container-item">
                                    <h3 className="user-profile-container-main-container-item-warning">
                                        No rated tv shows found
        </h3>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <Loader />
            </div>
        )
    }
}
