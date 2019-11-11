import { GET_NOWPLAYING } from "../types"
import Axios from "axios";
const getNowPlaying = () => {
    return dispatch => {
        Axios({
            url: "https://api.themoviedb.org/3/movie/now_playing?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1",
            method: "GET"
        })
            .then(result => {
                console.log(result);
                
                dispatch(saveNowPlaying(result.data))
            })
    }

}
const saveNowPlaying = (nowPlaying) => {
    return {
        nowPlaying,
        type: GET_NOWPLAYING
    }
}
export {  getNowPlaying }