import Axios from 'axios'
import { GET_TRAILERS } from "../types"
const getTrailersAPI = id => {
    return dispatch => {
        Axios({
            url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US`
        })
            .then(result => {
                dispatch(saveTrailers(result.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
const saveTrailers= trailers =>{
    return{
        trailers,
        type: GET_TRAILERS
    }
}
export {getTrailersAPI}