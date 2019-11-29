import { POST_MOVIES_POPULAR } from '../../actions/types';

const initState = {
  results: []
};

const postMoviesPopular = (state = initState, action) => {
  switch(action.type) {
    case POST_MOVIES_POPULAR:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export default postMoviesPopular;
