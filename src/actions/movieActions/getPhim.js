import { GET_NOWPLAYING, GET_PHIM } from "../types"
import Axios from "axios";
const getPhim = () => {
    return dispatch => {
        Axios({
            url: "http://localhost:3001/phim",
            method: "GET"
        })
            .then(result => {
                
                dispatch(saveNowPlaying(result.data))
            })
            .catch(err => {
                
                console.log(err)
            })
    }

}
const saveNowPlaying = (phim) => {
    return {
        phim,
        type: GET_PHIM
    }
}
export {  getPhim }