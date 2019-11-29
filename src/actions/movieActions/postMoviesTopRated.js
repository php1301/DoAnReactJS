import { POST_MOVIES_TOP_RATED } from '../types';

const saveMoviesTopRated = payload => ({
  type: POST_MOVIES_TOP_RATED,
  payload
});

const postMoviesTopRated = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesTopRated(data)))
    .catch(error => console.log(error))
  }
}

export default postMoviesTopRated;
