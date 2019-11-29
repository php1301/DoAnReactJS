import { POST_MOVIE_GENRES } from '../types';

const saveMovieGenres = payload => ({
  type: POST_MOVIE_GENRES,
  payload
});

const postMovieGenres = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieGenres(data)))
    .catch(error => console.log(error))
  }
};

export default postMovieGenres;
