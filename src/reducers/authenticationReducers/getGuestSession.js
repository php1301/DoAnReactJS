import { GET_GUEST_SESSION } from '../../actions/types';

const initialState = {};

const getGuestSession = (state = initialState, action) => {
  switch(action.type) {
    case GET_GUEST_SESSION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getGuestSession;
