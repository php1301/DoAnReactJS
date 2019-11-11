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
const rootReducer = combineReducers({
    toggleNav,
    movieReducer,
    getUpcoming,
    getPopular,
    getNowPlaying,
    getTopRated,
    getDetails,
    getReviews,
    getGenres
})
export default rootReducer