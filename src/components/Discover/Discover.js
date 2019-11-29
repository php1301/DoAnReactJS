import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import getDiscover from '../../actions/getDiscover';

import MainNav from '../MainNav/MainNav';
import Loader from '../Loader/Loader';

import './Discover.scss';

class Discover extends Component {

  // Local state handles search form two way binding
  state = {
    sortBy: 'popularity.desc',
    voteAverage: null,
    withPeople: null,
    withGenres: null,
    withKeywords: null,
    year: null,
    page: 1
  }

  componentDidMount() {
    this.handleGetDiscover("f4718f386ee605decefebc673ce3bc9c");
  }

  handleGetDiscover = (page = 1) => {
    this.props.getDiscover(`https://api.themoviedb.org/3/discover/movie?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&sort_by=${this.state.sortBy}&include_adult=false&include_video=false&page=${page}&${this.state.voteAverage ? `vote_average.gte=${this.state.voteAverage}&` : ''}${this.state.withGenres ? `with_genres=${this.state.withGenres}&` : ''}${this.state.withPeople ? `with_people=${this.state.withPeople}&` : ''}${this.state.year ? `year=${this.state.year}` : ''}`);
  }

  handlePagination = pageTransition => {
    if (this.state.page === 1 && pageTransition === '-') {
      this.setState({ page: 1 });
    } else if (pageTransition === '+') {
      this.setState({ page: this.state.page + 1 })
    } else if (pageTransition === '+') {
      this.setState({ page: this.state.page - 1 })
    }
  }

  render() {
    return(
      <div className="discover">
        <MainNav />
        <header className="discover-header">

          <h1 className="discover-header__title wow fadeIn" data-wow-delay="1s" data-wow-duration="3s">Discover</h1>
          <hr className="discover-header__separator" />

          <form className="discover-header-form" method="GET" action="/">

            <div className="discover-header-form-container">
              <select className="discover-header-form-container-select wow fadeInUp" data-wow-delay=".6s" data-wow-duration="3s" onChange={(e) => this.setState({ sortBy: e.target.value })} name="sort_by">
              <option className="discover-header-form-container-select__option" value="popularity.desc">Popularity Descending</option>
                <option className="discover-header-form-container-select__option" value="popularity.asc">Popularity Ascending</option>
                <option className="discover-header-form-container-select__option" value="release_date.desc">Release Date Descending</option>
                <option className="discover-header-form-container-select__option" value="release_date.asc">Release Date Ascending</option>
                <option className="discover-header-form-container-select__option" value="revenue.desc">Revenue Descending</option>
                <option className="discover-header-form-container-select__option" value="revenue.asc">Revenue Ascending</option>
                <option className="discover-header-form-container-select__option" value="vote_average.desc">Vote Average Descending</option>
                <option className="discover-header-form-container-select__option" value="vote_average.asc">Vote Average Ascending</option>
              </select>

              <input className="discover-header-form-container-input wow fadeInUp" data-wow-delay=".8s" data-wow-duration="3s" onChange={(e)=> this.setState({ voteAverage: e.target.value })} type="number" name="vote_average" placeholder="Vote Average" />
              <input className="discover-header-form-container-input wow fadeInUp" data-wow-delay="1s" data-wow-duration="3s" onChange={(e)=> this.setState({ withPeople: e.target.value })} type="text" name="with_People" placeholder="People involved" />
              <input className="discover-header-form-container-input wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="3s" onChange={(e)=> this.setState({ withGenres: e.target.value })} type="text" name="with_genres" placeholder="Genres" />
              <input className="discover-header-form-container-input wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="3s" onChange={(e)=> this.setState({ withKeywords: e.target.value })} type="text" name="with_keywords" placeholder="Keywords" />
              <input className="discover-header-form-container-input wow fadeInUp" data-wow-delay="1.6s" data-wow-duration="3s" onChange={(e)=> this.setState({ year: e.target.value })} type="number" name="year" placeholder="Year" />
            </div>

            <button className="discover-header-form__button" onClick={(e) => {
              e.preventDefault();
              this.handleGetDiscover(this.props.apiKey, this.state.page);
            }} >Search</button>

          </form>

        </header>

        <main className="discover-main">

          {
          this.props.discover.results.length > 0 ? this.props.discover.results.map(item => (
            <Link key={item.id} to={`/details/movie/${item.id}`}>
              <div className="discover-main-item">
                <img className="discover-main-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
                <h3 className="discover-main-item__title">{item.name ? item.name : item.title}</h3>
                <p className="discover-main-item-rating">
                  <svg className="discover-main-item-rating__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"/></svg>
                  {item.vote_average}
                </p>
              </div>
            </Link>
          ))
          :
          <h2 className="discover-warning">No results found</h2>}

        </main>

        <div className="discover-pagination">
          <button className="discover-pagination__button wow fadeIn" data-wow-delay=".5s" data-wow-duration="3s" onClick={() => {this.handlePagination('-'); this.handleGetDiscover(this.props.apiKey, this.state.page)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z"/></svg>Previous</button>
          <button className="discover-pagination__button wow fadeIn" data-wow-delay=".5s" data-wow-duration="3s" onClick={() => {this.handlePagination('+'); this.handleGetDiscover(this.props.apiKey, this.state.page)}}>Next<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"/></svg></button>
        </div>

        <Loader />

      </div>
    );
  }
}

const mapStateToProps = state => ({
//   apiKey: state.PostMDBConfig.apiKey,
//   MDBConfig: state.PostMDBConfig,
  discover: state.getDiscover
});

const mapDispatchToProps = dispatch => ({
  getDiscover: url => dispatch(getDiscover(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
