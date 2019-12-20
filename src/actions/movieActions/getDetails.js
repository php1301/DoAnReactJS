import { GET_DETAILS } from "../types"
import Axios from 'axios';
const getDetailsAPI = movie_id=> {
    return dispatch => {
        Axios({
            url : `https://api.themoviedb.org/3/movie/${movie_id}?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`,
            method: "GET"
        })
        .then(result => {
            dispatch(getDetails(result.data))
        })
    }
}
const getDetails = (details) => {
    return {
        details,
        type: GET_DETAILS
    }
}
export {getDetailsAPI}