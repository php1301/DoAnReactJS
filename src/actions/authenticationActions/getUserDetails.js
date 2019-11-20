import { GET_USER_DETAILS } from '../types';

const saveUserDetails = payload => ({
  type: GET_USER_DETAILS,
  payload
});

const getUserDetails = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveUserDetails(data)))
    .catch(error => console.log(error))
  };
};

export default getUserDetails;
