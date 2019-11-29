import { POST_MOVIES_UPCOMING } from '../../actions/types';

const initState = {
  results: []
};

const postMoviesUpcoming = (state = initState, action) => {
  switch(action.type) {
    case POST_MOVIES_UPCOMING:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
};

export default postMoviesUpcoming;
