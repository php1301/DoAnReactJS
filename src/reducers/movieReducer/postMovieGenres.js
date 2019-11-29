import { POST_MOVIE_GENRES } from '../../actions/types';

const initState = [];

const postMovieGenres = (state = initState, action) => {
  switch(action.type) {
    case POST_MOVIE_GENRES:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default postMovieGenres;
