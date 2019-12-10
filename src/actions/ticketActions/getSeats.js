import { GET_SEATS } from '../types'
import Axios from 'axios';
const getSeatsAPI = (id) => {
    return dispatch => {
        Axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method: "GET"
        })
            .then(result => {
                console.log(result)
                dispatch(getSeats(result.data))
            })
    }
}
const getSeats = (seats) => {
    return {
        seats,
        type: GET_SEATS
    }
}
export { getSeatsAPI }