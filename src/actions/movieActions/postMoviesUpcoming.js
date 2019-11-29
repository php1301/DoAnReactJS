import { POST_MOVIES_UPCOMING } from '../types';

const saveMoviesUpcoming = payload => ({
  type: POST_MOVIES_UPCOMING,
  payload
});

const postMoviesUpcoming = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesUpcoming(data)))
    .catch(error => console.log(error))
  }
};

export default postMoviesUpcoming;
