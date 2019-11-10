import {combineReducers} from "redux";
import userReducer from "../reducers/userReducers";
import toggleNav from "../reducers/toggleNav";
import movieReducer from "../reducers/movieReducer/movieReducer";
import getUpcoming from "../reducers/movieReducer/getUpcoming";
import getDetails from "../reducers/movieReducer/getDetails";
import getReviews from "../reducers/movieReducer/getReviews";
import getGenres from "../reducers/movieReducer/getGenres";
const rootReducer = combineReducers({
    toggleNav,
    movieReducer,
    getUpcoming,
    getDetails,
    getReviews,
    getGenres
})
export default rootReducer