import { POST_MOVIES_NOWPLAYING } from '../types';

const saveMoviesNowPlaying = payload => ({
  type: POST_MOVIES_NOWPLAYING,
  payload
});

const postMoviesNowPlaying = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesNowPlaying(data)))
    .catch(error => console.log(error));
  };
};

export default postMoviesNowPlaying;
