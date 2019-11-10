import { DETAIL_MOVIES, SAVE_LIST } from "../types";
import Axios  from 'axios';
const actOnSaveListMoviesAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
                .then(result => {
                    dispatch(actOnSaveListMovies(result.data))
                })
                .catch(err => {
                    console.log(err);
                })
        }
}
const actOnSaveListMovies = (listMovies) => {
    return {
        type: SAVE_LIST,
        listMovies
    }
}

export {actOnSaveListMoviesAPI, actOnSaveListMovies}