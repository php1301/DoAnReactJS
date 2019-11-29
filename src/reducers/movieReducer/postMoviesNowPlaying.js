import { POST_MOVIES_NOWPLAYING } from '../../actions/types';

const initState = {
  results: []
};

const postMoviesNowPlaying = (state = initState, action) => {
  switch(action.type) {
    case POST_MOVIES_NOWPLAYING:
      return {...action.payload};
    default:
      return state;
  }
};

export default postMoviesNowPlaying;
