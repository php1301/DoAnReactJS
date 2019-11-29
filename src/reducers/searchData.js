import { SEARCH_DATA } from '../actions/types';

const initState = {
  results: []
};

const searchData = (state = initState, action) => {
  switch(action.type) {
    case SEARCH_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default searchData;
