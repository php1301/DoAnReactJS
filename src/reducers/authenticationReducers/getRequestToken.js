import { GET_REQUEST_TOKEN } from '../../actions/types';

const initialState = {

};

const getRequestToken = (state = initialState, action) => {
  switch(action.type) {
      case GET_REQUEST_TOKEN:
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
  }
};

export default getRequestToken;
