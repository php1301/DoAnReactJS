import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify'
import cookie from 'js-cookie'
import '../UserLogin/UserLogin.scss';
import { connect, Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import FormAuth from '../FormAuth/FormAuth'
import firebase from 'firebase'
import firebaseConfig from "../../firestore"

import toggleLogInStatus from '../../actions/authenticationActions/toggleLogInStatus';
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: !!cookie.get('token'),
      photo: null,
      displayName: null
    }
  }
  

  // authenticate = (provider) => {
  //   const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  //   firebaseConfig
  //     .auth()
  //     .signInWithPopup(authProvider)
  //     .then(this.authHandler);
  // };
  componentDidMount() {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.authHandler(user)
    //   }
    // });
    this.authHandler()
  }
  // authHandler = async authData => {                                                              
  authHandler = async () => {                                                              
    let displayName = cookie.get('username')
    let photo = cookie.get('avatar')
    let uid = cookie.get('id')
    if (displayName !== null && photo !==null && uid !==null) {
      // localStorage.setItem('displayName', user.username)
      // localStorage.setItem('photo', user.avatar)
      // localStorage.setItem('uid', user.taiKhoan)
      console.log(this.props.loginStatus)
      this.setState((prev)=>({
        isLogin: !prev.isLogin,
  
      }));
    }
    console.log(this.state.isLogin)
    if (this.state.isLogin) {
      // const db = await firebase.firestore();
      // db.settings({
      //   timestampsInSnapshots: true
      // });
      // db.collection("user").doc(user.uid).set(
      //   {}
      // )
      this.props.toggleLogInStatus({ status: 'APPROVE' })
      this.props.history.push({ pathname: '/profile', state: { isLogin: this.state.isLogin, photo, displayName } })
    }
  };


  render() {
    return (
      <div className="user-log-in">
        <div className="user-log-in-container">
              <ToastContainer/>

          <header className="user-log-in-container-header">
            <img className="user-log-in-container-header__logo" src="http://www.demo.gloriathemes.com/wp/themovie/wp-content/themes/themovie/assets/img/logo-alternative.png" alt="logo" />
            <h1 className="user-log-in-container-header__title">Log In</h1>
            <h2 className="user-log-in-container-header__name">Film Cloud</h2>
            {/* <p className="user-log-in-container-content__warning">Log In now to have access to limited features</p> */}
          </header>

          <div className="user-log-in-container-content">
            {/* <a href="#">

              <button onClick={() => { this.authenticate("Facebook") }} className="user-log-in-container-content__button"  >Log In</button>
            </a> */}
            <FormAuth/>
          </div>


        </div>

        <div className="user-log-in-side-image">
          <h2 className="user-log-in-side-image__title">Browse and rate your favorite shows</h2>
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  toggleLogInStatus: status => dispatch(toggleLogInStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
