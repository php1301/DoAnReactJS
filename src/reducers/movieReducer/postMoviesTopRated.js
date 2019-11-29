import { POST_MOVIES_TOP_RATED } from '../../actions/types';

const initState = {
  results: []
};

const postMoviesTopRated = (state = initState, actions) => {
  switch(actions.type) {
    case POST_MOVIES_TOP_RATED:
      return {
        ...state,
        ...actions.payload
      };
    default:
      return state;
  }
};

export default postMoviesTopRated;
