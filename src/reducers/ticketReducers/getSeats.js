import { GET_SEATS } from '../../actions/types';
const initState = {
    result: []
}
const getSeats = (state = initState, action) => {
    switch (action.type) {
        case GET_SEATS:
            state.result = action.seats
            return { ...state }
        default: return { ...state }
    }
}
export default getSeats