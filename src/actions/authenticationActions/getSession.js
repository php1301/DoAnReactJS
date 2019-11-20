import { GET_SESSION } from '../types';

const saveSession = payload => ({
  type: GET_SESSION,
  payload
});

const getSession = (url, token) => {
  return dispatch => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ request_token: token }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => dispatch(saveSession(data)))
    .catch(error => console.log(error))
  };
};

export default getSession;
