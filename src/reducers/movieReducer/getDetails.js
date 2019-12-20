import { GET_DETAILS } from "../../actions/types"
const initState = {
    result: []
}
const getDetails = (state = initState, action) => {
    switch (action.type) {
        case GET_DETAILS:
            state.result = action.details
            return { ...state }
        default:
            return { ...state }
            break;
    }
}
export default getDetails