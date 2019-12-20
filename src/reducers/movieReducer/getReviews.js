import { GET_REVIEWS } from "../../actions/types"
const initState = {
    result: []
}
const getReviews = (state = initState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            state.result = action.reviews
            return { ...state }
        default:
            return {...state}
            break;
    }
}
export default getReviews