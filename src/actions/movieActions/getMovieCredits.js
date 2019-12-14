import { GET_MOVIE_CREDITS } from '../types';

const saveMovieCredits = payload => ({
  type: GET_MOVIE_CREDITS,
  payload
});

const getMovieCredits = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieCredits(data)))
    .catch(error => console.log(error))
  };
};

export default getMovieCredits;
