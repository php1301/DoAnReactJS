import { GET_PEOPLE_POPULAR } from '../types.js'

const savePeoplePopular = payload => ({
  type: GET_PEOPLE_POPULAR,
  payload
});

const getPeoplePopular = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeoplePopular(data)))
    .catch(error => console.log(error))
  };
};

export default getPeoplePopular;
