import { GET_UPCOMING } from "../types"
import Axios from "axios";
const getUpcoming = () => {
    return dispatch => {
        Axios({
            url: "https://api.themoviedb.org/3/movie/upcoming?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1",
            method: "GET"
        })
            .then(result => {
               
                dispatch(saveUpcoming(result.data))
            })
    }

}
const saveUpcoming = (upcoming) => {
    return {
        upcoming,
        type: GET_UPCOMING
    }
}
export { getUpcoming }