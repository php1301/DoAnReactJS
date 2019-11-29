import React, { Component } from 'react';
import "../MainNav/MainNav.scss";
import Icofont from 'react-icofont';
import { connect } from 'react-redux';
import toggleNav from '../../actions/toggleNav';
import "../MainNav/Ticket.scss";
import TicketModal from './TicketModal';
import { Link, NavLink } from 'react-router-dom';
class MainNav extends Component {

  state = {
    searchValue: ''
  }
  handleToggleNav = () => {
    this.props.toggleNav();
  };

  handleSearchInput = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  render() {
    // const {navStatus}=this.props;
    // console.log(navStatus)
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" /></svg>;
    const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z" /></svg>;
    const profileIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z" /></svg>;
    const discoverIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z" /></svg>;
    return (
      <nav className="main-nav">
        <div className="main-nav-top-section main-nav-top-section--hide">
          <Link to="/">
            <img
              className="main-nav-top-section__image fadeInLeft"
              src="http://www.demo.gloriathemes.com/wp/themovie/wp-content/themes/themovie/assets/img/logo-alternative.png"
              alt="logo"
            />
          </Link>
          <form className="main-nav-search-form bounce">
            <input
              onChange={this.handleSearchInput}
              className="main-nav-search-form__input"
              type="text"
              placeholder="search..."
            />
            <Link to={`/search-results/${this.state.searchValue}`}>
              <button className="main-nav-search-form__button" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z" />
                </svg>
              </button>
            </Link>
          </form>
        </div>
        <button
          className={`main-nav-toggle-button hamburger hamburger--elastic${this.props.navStatus ? '' : ' is-active'}`}
          type="button"
          onClick={this.handleToggleNav}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className={`main-nav-bottom-section ${!this.props.navStatus ? "" : "main-nav-bottom-section--hide"}`} >
          <Link to="/">
            <button className="main-nav-bottom-section__button fadeInLeft">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z" />
              </svg>
            </button>
          </Link>
          <Link to="/profile">
            <button className="main-nav-bottom-section__button fadeInLeft">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z" />
              </svg>
            </button>
          </Link>
          <Link to="/discover">
            <button className="main-nav-bottom-section__button fadeInLeft">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 231.358c-13.442 0-24.643 11.2-24.643 24.642s11.2 24.643 24.643 24.643 24.643-11.2 24.643-24.643-11.201-24.642-24.643-24.642zM256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32zm49.284 273.284L121.6 390.4l85.116-183.679L390.4 121.6l-85.116 183.684z" />
              </svg>
            </button>
          </Link>
        </div>
      </nav>

    )
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    navStatus: state.toggleNav.navStatus // cham den state cua toggleNav da duoc export tu reducer togglenav tren rootreducer
  }
} // sinh ra props nav status

const mapDispatchToProps = dispatch => { // tao props this.props.toggleNav, props nay truyen type // khi click vao nut thi goi phuong thuc type
  return { // // dispatch toggle nav action len toggle nav reducer de xet case
    toggleNav: () => {
      dispatch(toggleNav());
    }// sinh ra props toggle nav la ham
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)