import { GET_UPCOMING } from "../../actions/types";
const initState = {
    result: []
}
const getUpcoming = (state = initState, action) => {

    switch (action.type) {
        case GET_UPCOMING:
            state.result = action.upcoming
            return { ...state }
        default:
            return { ...state }
    }
}
export default getUpcoming