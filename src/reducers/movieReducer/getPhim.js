import { GET_PHIM } from "../../actions/types";
const initState = {
    result: []
}
const getPhim = (state = initState, action) => {

    switch (action.type) {
        case GET_PHIM:
            state.result = action.phim
            // return {...state, action.upcoming}
            return { ...state }
        default:
            return { ...state }
    }
}
export default getPhim