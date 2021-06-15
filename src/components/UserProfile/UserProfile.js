import React, { Component } from 'react'
import MainNav from '../MainNav/MainNav'
import Loader from '../Loader/Loader'
import "../UserProfile/UserProfile.scss";
import "../UserLogin/UserLogin.scss";
import UserItem from '../UserProfile/UserItem'
import { connect } from 'react-redux'
// import { Link, Redirect } from 'react-router-dom';
// import Carousel from "react-multi-carousel";
import cookie from 'js-cookie'
import "../../../node_modules/react-multi-carousel/lib/styles.css"
import toggleLogInStatus from '../../actions/authenticationActions/toggleLogInStatus';
import getUserDetails from '../../actions/authenticationActions/getUserDetails';
// import firebaseConfig from "../../firestore"
import TicketsProject from './TicketsProject';
import UserLogin from "../UserLogin/UserLogin"
const api = cookie.get('api');   
class UserProfile extends Component {

constructor(props) {
    super(props);
    this.state={
        veData:[]
    }
}


async componentDidMount() {
     const userId = cookie.get('id')
    const data = await fetch(`${api || 'http://localhost:3001'}/users/${userId}/ves`)
    const content = await data.json()
    this.setState({
        veData: content
    })
}

    logout = async () => {
        const removeArr = ["token", "id", "username", "avatar"]
        removeArr.map(i=>{
            cookie.remove(i)
        })
        this.props.history.push('/')
        this.props.toggleLogInStatus({ status: false });
    };
    render() {
        const {veData} = this.state
        // if (localStorage.getItem('uid') !== null) {
        //     let displayName = localStorage.getItem('displayName')
        //     let photo = localStorage.getItem('photo')
        //     let uid = localStorage.getItem('uid')
        if (cookie.get('id')) {
            let displayName = cookie.get('username')
            let photo = cookie.get('avatar')
            let uid = cookie.get('id')
            return (
                < div className="user-profile" >
                    <MainNav />
                    <div className="user-profile-container">
                        <aside className="user-profile-container-aside">
                            <nav className="user-profile-container-aside-nav">
                                <div className="user-profile-container-aside-nav-profile wow swing" data-wow-delay=".5s" data-wow-duration="5s">
                                    <img className="user-profile-container-aside-nav-profile-image" src={photo} alt="user" />
                                    <div className="user-profile-container-aside-nav-profile-info">
                                        <h2 className="user-profile-container-aside-nav-profile-info__user-name">Welcome</h2>
                                        <p className="user-profile-container-aside-nav-profile-info__user-type">{displayName}</p>
                                    </div>
                                </div>

                                <a to='/'>
                                    <button onClick={this.logout} className="user-profile-container-aside-nav-log-out wow fadeInUp" data-wow-delay=".5s" data-wow-duration="5s">Log Out</button>
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
                                {/* <div className="user-profile-container-main-container">
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
                                    <UserItem />
                                </div> */}
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
                                            Transactions
        </h3>
                                        <hr className="user-profile-container-main-container-header__separator" />
                                    </header>
                                    {veData && veData.length > 0 ? veData.map(i=>{
                                        return(
                                    <TicketsProject maVe={i.maVe} />
                                        )
                                    }) 
                                    : ( <h3 className="user-profile-container-main-container-item-warning">
                                    No Ticket transactions found  :( </h3>)
                                    }
                                </div>

                            </div>
                        </main>
                    </div>
                    {this.props.logInStatus === false ? "" : <Loader />}
                </div >
            )
        }
        else {
            this.props.history.push('/login')
            return (<UserLogin />)
        }
    }
}
const mapStateToProps = state => ({
    logInStatus: state.toggleLogInStatus.status,
    userDetails: state.getUserDetails,
});

const mapDispatchToProps = dispatch => ({
    toggleLogInStatus: status => dispatch(toggleLogInStatus(status)),
    getUserDetails: url => dispatch(getUserDetails(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
