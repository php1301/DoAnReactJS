import { TOGGLE_LOG_IN_STATUS } from '../../actions/types';

const initialState = {
  status: false
};

const toggleLogInStatus = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_LOG_IN_STATUS:
      return {
        ...state,
        ...action.status
      };
    default:
      return state;
  }
};

export default toggleLogInStatus;
