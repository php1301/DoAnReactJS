import { GET_USER_DETAILS } from '../../actions/types';

const initialState = {};

const getUserDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getUserDetails;
