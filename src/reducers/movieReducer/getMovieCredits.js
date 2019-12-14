import { GET_MOVIE_CREDITS } from '../../actions/types';

const initialState = {
  cast: []
};

const getMovieCredits = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE_CREDITS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getMovieCredits;
