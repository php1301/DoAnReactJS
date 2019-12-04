import { GET_TRAILERS } from "../../actions/types"
const initState = {
    result: []
}
const getTrailers = (state = initState, action) => {
    switch (action.type) {
        case GET_TRAILERS:
            state.result = action.trailers
            return { ...state }
        default:
            return { ...state }
    }
}
export default getTrailers