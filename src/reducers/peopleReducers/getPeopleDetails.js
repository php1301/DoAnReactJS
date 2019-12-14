import { GET_PEOPLE_DETAILS } from '../../actions/types';

const initialState = {
  results: []
};

const getPeopleDetails = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getPeopleDetails;
