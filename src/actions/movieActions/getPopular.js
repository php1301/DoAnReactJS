import { GET_POPULAR } from "../types"
import Axios from "axios";
const getPopular = () => {
    return dispatch => {
        Axios({
            url: "https://api.themoviedb.org/3/movie/popular?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1",
            method: "GET"
        })
            .then(result => {
                
                dispatch(savePopular(result.data))
            })
    }

}
const savePopular = (popular) => {
    return {
        popular,
        type: GET_POPULAR
    }
}
export {  getPopular }