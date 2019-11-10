import {SAVE_LIST, DETAIL_MOVIES} from "../../actions/types"
const initState = {
    listMovies: []
}
const movieReducer = (state = initState, action) =>{
    switch(action.type){
        case SAVE_LIST:
            state.listMovies = action.listMovies;
            return {...state}
        default:
           return {...state}
    }
}
export default movieReducer