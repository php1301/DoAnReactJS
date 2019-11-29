import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import postMoviesNowPlaying from '../../actions/movieActions/postMoviesNowPlaying';
import postMoviesPopular from '../../actions/movieActions/postMoviesPopular';
import postMoviesTopRated from '../../actions/movieActions/postMoviesTopRated';
import postMoviesUpcoming from '../../actions/movieActions/postMoviesUpcoming';
import postMovieGenres from '../../actions/movieActions/postMovieGenres';
// import getPeoplePopular from '../../actions/peopleActions/getPeoplePopular';

import searchData from '../../actions/searchData';
import postSearchResults from '../../actions/postSearchResults';
import MainNav from '../MainNav/MainNav';

import './SearchResults.scss';

class SearchResults extends Component {

    state = {
        searchResults: null,
        page: 1
    }

    // Fetches initial search data
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.searchData(`https://api.themoviedb.org/3/search/multi?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`);
        this.props.postMovieGenres("https://api.themoviedb.org/3/genre/movie/list?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US")
    }

    // Checks if new props have been recieved and fetches new data
    UNSAFE_componentWillReceiveProps(nextProps) {

        if (nextProps.match.params.id !== this.props.match.params.id || this.checkParams(nextProps.match.params.id)) {
            switch (nextProps.match.params.id) {

                case 'top-rated-movies':
                    this.props.postMoviesTopRated(`https://api.themoviedb.org/3/movie/top_rated?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1`);
                    break;

                case 'upcoming-movies':
                    this.props.postMoviesUpcoming(`https://api.themoviedb.org/3/movie/upcoming?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1`);
                    break;

                case 'now-playing-movies':
                    this.props.postMoviesNowPlaying(`https://api.themoviedb.org/3/movie/now_playing?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1`);
                    break;

                case 'popular-movies':
                    this.props.postMoviesPopular(`https://api.themoviedb.org/3/movie/popular?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1`);
                    break;

                case 'popular-people':
                    this.props.getPeoplePopular(`https://api.themoviedb.org/3/person/popular?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1`);
                    break;

                default:
                    this.props.searchData(`https://api.themoviedb.org/3/search/multi?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&query=${nextProps.match.params.id}&page=1&include_adult=false`);

            }
        }
    }

    // Handles search results pagination
    handlePagination = pageTransition => {

        if (this.state.page === 1 && pageTransition === '-') {
            this.setState({ page: 1 });
        } else if (pageTransition === '+') {
            this.setState({ page: this.state.page + 1 })
        } else if (pageTransition === '+') {
            this.setState({ page: this.state.page - 1 })
        }

        this.props.searchData(`https://api.themoviedb.org/3/search/multi?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&query=${this.props.match.params.id}&page=${this.state.page}&include_adult=false`);

    }

    // Checks which type of search user is looking for
    checkParams = el => {
        switch (el) {

            case 'top-rated-movies':
                return true;

            case 'upcoming-movies':
                return true;

            case 'now-playing-movies':
                return true;

            case 'popular-movies':
                return true;

            case 'popular-people':
                return true;

            default:
                return false;
        }
    };

    // Takes a tring and parses the search string
    parseSearchStr = str => str.split('-').map((item, index) => index === 0 ? item.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter).join('') : item).join(' ');

    // Checks item genre ids, compares them to genre list and returns genre names
    handleGenres = ( genres) => {
        const genresList =  this.props.movieGenres.genres;
        if (genresList && genres) {
            let genresArr = genresList.filter(genre => genre.id === genres[0] || genre.id === genres[1] ? genre.name : null);
            return <p className="search-results-main-body-item__genres">{genresArr[0] ? genresArr[0].name : ''}{genresArr[1] ? ` / ` + genresArr[1].name : ''}</p>
        }
    }
    // Returns search data
    searchResults = () => {
        console.log(this.props.searchDataResults)
        return (
            <div className="search-results-main-body">
                {this.props.searchDataResults.results.length > 0 ? this.props.searchDataResults.results.map(item =>
                    (
                        <Link key={item.id} to={`/details/movie/${item.id}`}>
                            <div className="search-results-main-body-item">
                                <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
                                <h3 className="search-results-main-body-item__title">{item.media_type === 'tv' ? item.name : item.title}</h3>
                                {this.handleGenres( item.genre_ids)}
                            </div>
                        </Link>
                    )
                ) :
                    (
                        null
                    )}

            </div>
        );
        // switch (this.props.match.params.id) {

        //     case 'top-rated-movies':
        //         return (
        //             <div className="search-results-main-body">
        //                 {this.props.moviesTopRated.results.length > 0 ? this.props.moviesTopRated.results.map(item =>
        //                     (
        //                         <Link key={item.id} to={`/details/movie/${item.id}`}>
        //                             <div className="search-results-main-body-item">
        //                                 <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
        //                                 <h3 className="search-results-main-body-item__title">{item.title}</h3>
        //                                 {this.handleGenres(item.media_type, item.genre_ids)}
        //                             </div>
        //                         </Link>
        //                     )
        //                 ) :
        //                     (
        //                         console.log(this.props.moviesTopRated.results.length)
        //                     )}

        //             </div>
        //         );

        //     case 'upcoming-movies':
        //         return (
        //             <div className="search-results-main-body">
        //                 {this.props.moviesUpcoming.results.length > 0 ? this.props.moviesUpcoming.results.map(item =>
        //                     (
        //                         <Link key={item.id} to={`/details/movie/${item.id}`}>
        //                             <div className="search-results-main-body-item">
        //                                 <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} alt="" />
        //                                 <h3 className="search-results-main-body-item__title">{item.title}</h3>
        //                                 {this.handleGenres(item.media_type, item.genre_ids)}
        //                             </div>
        //                         </Link>
        //                     )
        //                 ) :
        //                     (
        //                         console.log(this.props.moviesTopRated.results.length)
        //                     )}

        //             </div>
        //         );

        //     case 'now-playing-movies':
        //         return (
        //             <div className="search-results-main-body">
        //                 {this.props.moviesNowPlaying.results.length > 0 ? this.props.moviesNowPlaying.results.map(item =>
        //                     (
        //                         <Link key={item.id} to={`/details/movie/${item.id}`}>
        //                             <div className="search-results-main-body-item">
        //                                 <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
        //                                 <h3 className="search-results-main-body-item__title">{item.title}</h3>
        //                                 {this.handleGenres(item.media_type, item.genre_ids)}
        //                             </div>
        //                         </Link>
        //                     )
        //                 ) :
        //                     (
        //                         console.log(this.props.moviesTopRated.results.length)
        //                     )}

        //             </div>
        //         );

        //     case 'popular-movies':
        //         return (
        //             <div className="search-results-main-body">
        //                 {this.props.moviesPopular.results.length > 0 ? this.props.moviesPopular.results.map(item =>
        //                     (
        //                         <Link key={item.id} to={`/details/movie/${item.id}`}>
        //                             <div className="search-results-main-body-item">
        //                                 <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
        //                                 <h3 className="search-results-main-body-item__title">{item.title}</h3>
        //                                 {this.handleGenres(item.media_type, item.genre_ids)}
        //                             </div>
        //                         </Link>
        //                     )
        //                 ) :
        //                     (
        //                         console.log(this.props.moviesTopRated.results.length)
        //                     )}

        //             </div>
        //         );

        // case 'popular-tv-shows':
        //     return (
        //         <div className="search-results-main-body">
        //             {this.props.TVPopular.results.length > 0 ? this.props.TVPopular.results.map(item =>
        //                 (
        //                     <Link key={item.id} to={`/details/tv/${item.id}`}>
        //                         <div className="search-results-main-body-item">
        //                             <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
        //                             <h3 className="search-results-main-body-item__title">{item.title}</h3>
        //                             {this.handleGenres(item.media_type, item.genre_ids)}
        //                         </div>
        //                     </Link>
        //                 )
        //             ) :
        //                 (
        //                     null
        //                 )}

        //         </div>
        //     );



        // case 'popular-people':
        //     return (
        //         <div className="search-results-main-body">
        //             {this.props.peoplePopular.results.length > 0 ? this.props.peoplePopular.results.map(person =>
        //                 (
        //                     <Link key={person.id} to={`/details/people/${person.id}`}>
        //                         <div className="search-results-main-body-item">
        //                             <img className="search-results-main-body-item__image" src={this.props.MDBConfig.images ? this.props.MDBConfig.images.secure_base_url + this.props.MDBConfig.images.poster_sizes[6] + person.profile_path : ''} alt="" />
        //                             <h3 className="search-results-main-body-item__title">{person.name}</h3>
        //                         </div>
        //                     </Link>
        //                 )
        //             ) :
        //                 (
        //                     null
        //                 )}

        //         </div>
        //     );

        // default:
        //     return (
        //         <div className="search-results-main-body">
        //             {this.props.searchDataResults.results.length > 0 ? this.props.searchDataResults.results.map(item =>
        //                 (
        //                     <Link key={item.id} to={`/details/${item.media_type}/${item.id}`}>
        //                         <div className="search-results-main-body-item">
        //                             <img className="search-results-main-body-item__image" src={`http://image.tmdb.org/t/p/w185//${item.poster_path}`} />
        //                             <h3 className="search-results-main-body-item__title">{item.media_type === 'tv' ? item.name : item.title}</h3>
        //                             {this.handleGenres(item.media_type, item.genre_ids)}
        //                         </div>
        //                     </Link>
        //                 )
        //             ) :
        //                 (
        //                     null
        //                 )}

        //         </div>
        //     );

    }

    render() {

        return (
            <div className="search-results">

                <MainNav />

                <main className="search-results-main">

                    <header className="search-results-main-header">
                        <h1 className="search-results-main-header__title wow fadeInUp" data-wow-delay=".6s" data-wow-duration="2s">Search results for {this.parseSearchStr(this.props.match.params.id)}</h1>
                        <hr className="search-results-main-header__separator" />
                    </header>

                    {this.searchResults()}

                    <div className="search-results-main-pagination">
                        <button className="search-results-main-pagination__button" onClick={() => this.handlePagination('-')}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z" /></svg>Previous</button>
                        <button className="search-results-main-pagination__button" onClick={() => this.handlePagination('+')}>Next<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z" /></svg></button>
                    </div>

                </main>

                <aside className="search-results-aside">

                    <div className="search-results-aside-item wow fadeInUp" data-wow-delay=".8s" data-wow-duration="2s">

                        <header className="search-results-aside-item-header">
                            <h3 className="search-results-aside-item-header__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M437.333 64c-2.176 0-4.396 1.369-9.176 3.207L320 108.802 192 64 71.469 104.531C67.197 105.604 64 109.864 64 115.197v322.136C64 443.729 68.271 448 74.666 448c1.828 0 6.505-2.33 9.087-3.319L192 403.197 320 448l120.531-40.531c4.271-1.073 7.469-5.334 7.469-10.667V74.666C448 68.271 443.729 64 437.333 64zM320 405.333l-128-44.802V106.666l128 44.803v253.864z" /></svg>Explore</h3>
                        </header>

                        <ul className="search-results-aside-item-list">
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/login'}>Profile</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/discover'}>Discover</Link>
                            </li>
                        </ul>

                    </div>

                    <div className="search-results-aside-item wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">

                        <header className="search-results-aside-item-header">
                            <h3 className="search-results-aside-item-header__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 219.5v-85.2c0-13.4-11.2-24.3-24.9-24.3H56.9C43.2 110 32 120.9 32 134.3v243.3C32 391 43.2 402 56.9 402h302.2c13.7 0 24.9-11 24.9-24.3v-85.2l96 97.3V122.2l-96 97.3z" /></svg>Movies</h3>
                        </header>

                        <ul className="search-results-aside-item-list">
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/top-rated-movies'}>Top rated movies</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/upcoming-movies'}>Upcoming movies</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/now-playing-movies'}>Now playing movies</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/popular-movies'}>Popular movies</Link>
                            </li>
                        </ul>

                    </div>

                    {/* <div className="search-results-aside-item wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="2s">

                        <header className="search-results-aside-item-header">
                            <h3 className="search-results-aside-item-header__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M439.3 76H72.7C50.3 76 32 94 32 116v240c0 22 18.3 40 40.7 40h101.8v40h162.9v-40h101.8c22.4 0 40.5-18 40.5-40l.2-240c.1-22-18.2-40-40.6-40zm0 280H72.7V116h366.5v240z" /></svg>TV</h3>
                        </header>

                        <ul className="search-results-aside-item-list">
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/popular-tv-shows'}>Popular TV shows</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/top-rated-tv-shows'}>Top rated TV shows</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/on-the-air-tv-shows'}>On the air TV shows</Link>
                            </li>
                            <li className="search-results-aside-item-list__item">
                                <Link to={'/search-results/airing-today-tv-shows'}>Airing today TV shows</Link>
                            </li>
                        </ul>

                    </div> */}

                    <div className="search-results-aside-item wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="2s">

                        <header className="search-results-aside-item-header">
                            <h3 className="search-results-aside-item-header__title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" /><g><path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" /></g></svg>People</h3>
                        </header>

                        <ul className="search-results-aside-item-list">
                            <li>
                                <Link to={'/search-results/popular-people'}>Popular people</Link>
                            </li>
                        </ul>

                    </div>

                </aside>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    searchDataResults: state.searchData,
    searchResults: state.postSearchResults,

    moviesUpcoming: state.postMoviesUpcoming,
    moviesPopular: state.postMoviesPopular,
    moviesNowPlaying: state.postMoviesNowPlaying,
    moviesTopRated: state.postMoviesTopRated,
    movieGenres: state.postMovieGenres,
    // genres: state.getGenres.result.genres,


    // peoplePopular: state.getPeoplePopular,
});

const mapDispatchToProps = dispatch => (
    {
        searchData: url => dispatch(searchData(url)),
        postSearchResults: url => dispatch(postSearchResults(url)),

        postMoviesUpcoming: url => dispatch(postMoviesUpcoming(url)),
        postMoviesPopular: url => dispatch(postMoviesPopular(url)),
        postMoviesNowPlaying: url => dispatch(postMoviesNowPlaying(url)),
        postMoviesTopRated: url => dispatch(postMoviesTopRated(url)),
        // onSaveGenres: url => dispatch(postMovieGenres(url))
        // getPeoplePopular: url => dispatch(getPeoplePopular(url)),
        postMovieGenres: url => dispatch(postMovieGenres(url)),

    });

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
