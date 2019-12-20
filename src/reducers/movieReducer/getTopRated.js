import { GET_TOP_RATED } from "../../actions/types";
const initState = {
    result: []
}
const getTopRated = (state = initState, action) => {

    switch (action.type) {
        case GET_TOP_RATED:
            state.result = action.topRated
            return { ...state }
        default:
            return { ...state }
    }
}
export default getTopRated