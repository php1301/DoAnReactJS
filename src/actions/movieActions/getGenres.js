import { GET_GENRES } from "../types"
import Axios from 'axios';
const getGenresAPI = () => {
    return dispatch => {
        Axios({
            url :"https://api.themoviedb.org/3/genre/movie/list?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US",
            method: "GET"
        })
        .then(result => {
            dispatch(getGenres(result.data))
        })
    }
}
const getGenres = (genres) => {
    return {
        genres,
        type: GET_GENRES
    }
}
export {getGenresAPI}