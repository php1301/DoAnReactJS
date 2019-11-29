import { POST_MOVIES_POPULAR } from '../types';

const saveMoviesPopular = payload => ({
  type: POST_MOVIES_POPULAR,
  payload
});

const postMoviesPopular = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesPopular(data)))
    .catch(error => {
      console.log(error);
    })
  }
};

export default postMoviesPopular;
