import { GET_REQUEST_TOKEN } from '../types';

const saveRequestToken = payload => ({
  type: GET_REQUEST_TOKEN,
  payload
});

const getRequestToken = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveRequestToken(data)))
    .catch(error => console.log(error))
  };
};

export default getRequestToken;
