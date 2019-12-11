import { GET_MOVIES } from '../../actions/types'
const initState = {
    result: []
}
const getMovies = (state = initState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            state.result = action.movies
            return { ...state }
        default: return { ...state }
    }
}
export default getMovies