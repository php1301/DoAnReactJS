import { GET_SESSION } from '../../actions/types'

const initialState = {};

const getSession = (state = initialState, action) => {
  switch(action.type) {
    case GET_SESSION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getSession;
