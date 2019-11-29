import { POST_SEARCH_RESULTS } from '../actions/types';

const initialState = {
  results: []
};

const postSearchResults = (state = initialState, action) => {
  switch(action.type) {
    case POST_SEARCH_RESULTS:
      return {
        ...action.payload
      };
    default:
      return state;
  }
}

export default postSearchResults;
