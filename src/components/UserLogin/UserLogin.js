import React, { Component } from 'react';
import '../UserLogin/UserLogin.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import toggleLogInStatus from '../../actions/authenticationActions/toggleLogInStatus';
import getRequestToken from '../../actions/authenticationActions/getRequestToken';
class UserLogin extends Component {
  componentDidMount() {
    this.props.getRequestToken("https://api.themoviedb.org/3/authentication/token/new?api_key=f4718f386ee605decefebc673ce3bc9c");
  }

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
            <a href={`https://www.themoviedb.org/authenticate/${this.props.requestToken.request_token}?redirect_to=http://localhost:3000/profile/approved`}>
              <button className="user-log-in-container-content__button" onClick={this.handleLogIn} >Log In</button>
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
