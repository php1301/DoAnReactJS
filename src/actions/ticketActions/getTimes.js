import { GET_TIMES } from '../types'
import Axios from 'axios';
const getTimesAPI = (id) => {
    return dispatch => {
        Axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            method: "GET"
        })
            .then(result => {
                dispatch(getTimes(result.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
const getTimes = (times) => {
    return {
        times,
        type: GET_TIMES
    }
}
export { getTimesAPI }