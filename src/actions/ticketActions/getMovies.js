import { GET_MOVIES } from '../types'
import Axios from 'axios';
const getMoviesAPI = () => {
    return dispatch => {
        Axios({
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10",
            method: "GET"
        })
            .then(result => {
                dispatch(saveMovies(result.data));
                
            })
            .catch(err => {
                console.log(err)
            })
    }
}
const saveMovies = (movies) => {
    return {
        movies,
        type: GET_MOVIES
    }
}
export { getMoviesAPI }