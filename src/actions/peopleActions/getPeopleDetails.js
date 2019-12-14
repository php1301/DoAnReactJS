import { GET_PEOPLE_DETAILS } from '../types';

const savePeopleDetails = payload => ({
  type: GET_PEOPLE_DETAILS,
  payload
});

const getPeopleDetails = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeopleDetails(data)))
    .catch(error => console.log(error))
  };
};

export default getPeopleDetails;
