import { GET_TIMES } from '../../actions/types'
const initState = {
    result: []
}
const getTimes = (state = initState, action) => {
    switch (action.type) {
        case GET_TIMES:
            state.result = action.times
            return { ...state }
        default: return { ...state }
    }
}
export default getTimes