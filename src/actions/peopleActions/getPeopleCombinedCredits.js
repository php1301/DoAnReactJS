import { GET_PEOPLE_COMBINED_CREDITS } from '../types';

const savePeopleCombinedCredits = payload => ({
  type: GET_PEOPLE_COMBINED_CREDITS,
  payload
});

const getPeopleCombinedCredits = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeopleCombinedCredits(data)))
    .catch(error => console.log(error))
  };
};

export default getPeopleCombinedCredits;
