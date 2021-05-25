import { GET_NOWPLAYING, GET_PHIM } from "../types"
import Axios from "axios";
import cookie from 'js-cookie'
const getPhim = () => {
    const api = cookie.get('api');    return dispatch => {
        Axios({
            url: `${api || 'http://localhost:3001'}/phim`,
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