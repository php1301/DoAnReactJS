import { GET_TOP_RATED } from "../types"
import Axios from "axios";
const getTopRated = () => {
    return dispatch => {
        Axios({
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1",
            method: "GET"
        })
            .then(result => {
                
                dispatch(saveTopRated(result.data))
            })
    }

}
const saveTopRated = (topRated) => {
    return {
        topRated,
        type: GET_TOP_RATED
    }
}
export {  getTopRated }