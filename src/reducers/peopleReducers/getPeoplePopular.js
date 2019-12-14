import { GET_PEOPLE_POPULAR } from '../../actions/types';

const initialState = {
  results: []
};

const getPeoplePopular = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_POPULAR:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getPeoplePopular;
