import {GET_REVIEWS} from '../types'
import Axios from 'axios'
const getReviewsAPI = movie_id => {
    return dispatch => {
        Axios({
            url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1`,
            method: "GET"
        })
        .then(result=> {
            dispatch(getReviews(result.data))
        })
    }
}
const getReviews = reviews => {
    return {
        reviews,
        type: GET_REVIEWS
    }
}
export {getReviewsAPI}