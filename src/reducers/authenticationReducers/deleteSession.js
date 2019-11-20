import { DELETE_SESSION } from '../../actions/types';

const initialState = {};

const deleteSession = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_SESSION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default deleteSession;
