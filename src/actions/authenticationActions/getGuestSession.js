import { GET_GUEST_SESSION } from '../types';

const saveGuestSession = payload => ({
  type: GET_GUEST_SESSION,
  payload
});

const getGuestSession = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveGuestSession(data)))
    .catch(error => console.log(error));
  };
};

export default getGuestSession;
