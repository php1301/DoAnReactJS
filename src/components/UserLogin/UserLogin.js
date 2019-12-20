import React, { Component } from 'react';
import '../UserLogin/UserLogin.scss';
import { connect, Provider } from 'react-redux';
import { Link } from 'react-router-dom';

import firebase from 'firebase'
import firebaseConfig from "../../firestore"

import toggleLogInStatus from '../../actions/authenticationActions/toggleLogInStatus';
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

  authenticate = provider => {
    console.log(provider);
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseConfig
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  authHandler = async authData => {
    const user = await authData.user;
      localStorage.setItem('displayName', user.displayName)
      localStorage.setItem('photo', user.photoURL)
      localStorage.setItem('uid', user.uid)
    this.setState({
      isLogin: true,

    });
    if (this.state.isLogin === true) {
      this.props.toggleLogInStatus({ status: 'APPROVE' })
      this.props.history.push({ pathname: '/profile', state: { isLogin: this.state.isLogin, photo: this.state.photo, displayName: this.state.displayName } })
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
});

const mapDispatchToProps = dispatch => ({
  toggleLogInStatus: status => dispatch(toggleLogInStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
