import { GET_NOWPLAYING } from "../../actions/types";
const initState = {
    result: []
}
const getNowPlaying = (state = initState, action) => {

    switch (action.type) {
        case GET_NOWPLAYING:
            state.result = action.nowPlaying
            return { ...state }
        default:
            return { ...state }
    }
}
export default getNowPlaying