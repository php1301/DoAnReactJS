import { combineReducers } from "redux";
import userReducer from "../reducers/userReducers";
import toggleNav from "../reducers/toggleNav";
import movieReducer from "../reducers/movieReducer/movieReducer";
import getUpcoming from "../reducers/movieReducer/getUpcoming";
import getPopular from "../reducers/movieReducer/getPopular";
import getNowPlaying from "../reducers/movieReducer/getNowPlaying";
import getTopRated from "../reducers/movieReducer/getTopRated";
import getDetails from "../reducers/movieReducer/getDetails";
import getReviews from "../reducers/movieReducer/getReviews";
import getGenres from "../reducers/movieReducer/getGenres";
import getTrailers from "../reducers/movieReducer/getTrailers";
import getMovieCredits from '../reducers/movieReducer/getMovieCredits';

import getRequestToken from "./authenticationReducers/getRequestToken";
import getSession from "./authenticationReducers/getSession";
import deleteSession from "./authenticationReducers/deleteSession";
import getGuestSession from "./authenticationReducers/getGuestSession";
import toggleLogInStatus from "./authenticationReducers/toggleLogInStatus";
import getUserDetails from "./authenticationReducers/getUserDetails";

import getDiscover from "./getDiscover";
import setItemType from "./setItemType";
import searchData from "./searchData";
import postSearchResults from "./postSearchResults";
import postMoviesNowPlaying from "../reducers/movieReducer/postMoviesNowPlaying"
import postMoviesPopular from "../reducers/movieReducer/postMoviesPopular";
import postMoviesTopRated from "../reducers/movieReducer/postMoviesTopRated";
import postMoviesUpcoming from "../reducers/movieReducer/postMoviesUpcoming";
import postMovieGenres from '../reducers/movieReducer/postMovieGenres';

import getSeats from "../reducers/ticketReducers/getSeats";
import getMovies from "../reducers/ticketReducers/getMovies";
import getTimes from "../reducers/ticketReducers/getTimes";

import getPeopleDetails from './peopleReducers/getPeopleDetails';
import getPeopleCombinedCredits from './peopleReducers/getPeopleCombinedCredits';
import getPeoplePopular from './peopleReducers/getPeoplePopular';

const rootReducer = combineReducers({
    toggleNav,
    movieReducer,
    getUpcoming,
    getPopular,
    getNowPlaying,
    getTopRated,
    getDetails,
    getReviews,
    getGenres,
    getTrailers,
    getMovieCredits,

    getUserDetails,
    getRequestToken,
    getSession,
    deleteSession,
    getGuestSession,
    toggleLogInStatus,

    postMoviesNowPlaying,
    postMoviesPopular,
    postMoviesTopRated,
    postMoviesUpcoming,
    postMovieGenres,

    getDiscover,
    setItemType,
    searchData,
    postSearchResults,

    getPeopleDetails,
    getPeopleCombinedCredits,
    getPeoplePopular,
  
    getSeats,
    getMovies,
    getTimes
})
export default rootReducer