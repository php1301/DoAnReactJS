import React, { Component } from 'react';
import '../UserLogin/UserLogin.scss';
import { connect, Provider } from 'react-redux';
import { Link } from 'react-router-dom';
import getSession from '../../actions/authenticationActions/getSession';
import deleteSession from '../../actions/authenticationActions/deleteSession';
import getUserDetails from '../../actions/authenticationActions/getUserDetails';
import firebase from 'firebase'
import firebaseConfig from "../../firestore"

import toggleLogInStatus from '../../actions/authenticationActions/toggleLogInStatus';
import getRequestToken from '../../actions/authenticationActions/getRequestToken';
class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: this.props.logInStatus,
      photo: null,
      displayName: null
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler(user)
      }
    });
  }
  // componentDidMount() {
  //   this.props.getRequestToken("https://api.themoviedb.org/3/authentication/token/new?api_key=f4718f386ee605decefebc673ce3bc9c");
  // }
  authenticate = provider => {
    console.log(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseConfig
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  authHandler = authData => {
    let number = 123
    const user = authData.user;
    if (user !== null) {
      localStorage.setItem('displayName', user.displayName)
      localStorage.setItem('photo', user.photoURL)
      localStorage.setItem('uid', user.uid)
    }
    this.setState({
      isLogin: true,
      // photo: user.photoURL,
      // displayName: user.displayName
    });
    if (this.state.isLogin === true) {
      this.props.history.push({ pathname: '/profile/approve', state: { isLogin: this.state.isLogin, photo: this.state.photo, displayName: this.state.displayName } })
    }
  };


  render() {
    return (
      <div className="user-log-in">

        <div className="user-log-in-container">

          <header className="user-log-in-container-header">
            <img className="user-log-in-container-header__logo" src="http://www.demo.gloriathemes.com/wp/themovie/wp-content/themes/themovie/assets/img/logo-alternative.png" alt="logo" />
            <h1 className="user-log-in-container-header__title">Log In</h1>
            <h2 className="user-log-in-container-header__name">Film Cloud</h2>
          </header>

          <div className="user-log-in-container-content">
            <a href="#">
              {/* <a href={`https://www.themoviedb.org/authenticate/${this.props.requestToken.request_token}?redirect_to=http://localhost:3000/profile/approved`}> */}
              {/* <button className="user-log-in-container-content__button" onClick={this.handleLogIn} >Log In</button> */}
              <button onClick={() => { this.authenticate("Facebook") }} className="user-log-in-container-content__button"  >Log In</button>
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
const mapStateToProps = state => ({
  requestToken: state.getRequestToken
});

const mapDispatchToProps = dispatch => ({
  getRequestToken: url => dispatch(getRequestToken(url)),
  toggleLogInStatus: status => dispatch(toggleLogInStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
