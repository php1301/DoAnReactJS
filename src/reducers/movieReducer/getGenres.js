import { GET_GENRES } from "../../actions/types"
const initState = {
    result: []
}
const getGenres = (state = initState, action) => {
    switch (action.type) {
        case GET_GENRES:
            state.result = action.genres
            return { ...state }
        default:
            return { ...state }
            break;
    }
}
export default getGenres