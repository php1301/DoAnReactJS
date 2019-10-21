//thuat toan
import { TOGGLE_NAV } from "../actions/types";
const initState = {
    navStatus: true
}

const toggleNav = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_NAV: {
            return {
                ...state,
                navStatus: state.navStatus ? false : true,
            }
        }
        default: return { ...state }
    }
}
export default toggleNav;