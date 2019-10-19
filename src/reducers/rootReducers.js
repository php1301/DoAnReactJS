import {combineReducers} from "redux";
import userReducer from "../reducers/userReducers";
import toggleNav from "../reducers/toggleNav";
const rootReducer = combineReducers({
    toggleNav
})
export default rootReducer