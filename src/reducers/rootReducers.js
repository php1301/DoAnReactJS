import {combineReducers} from "redux";
import userReducer from "../reducers/userReducers";
import toggleNav from "../reducers/toggleNav";
import movieReducer from "../reducers/movieReducer";
const rootReducer = combineReducers({
    toggleNav,
    movieReducer
})
export default rootReducer