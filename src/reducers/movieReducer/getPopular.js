import { GET_POPULAR } from "../../actions/types";
const initState = {
    result: []
}
const getPopular = (state = initState, action) => {

    switch (action.type) {
        case GET_POPULAR:
            state.result = action.popular
            return { ...state }
        default:
            return { ...state }
    }
}
export default getPopular