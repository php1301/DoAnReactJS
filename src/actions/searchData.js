import { SEARCH_DATA } from './types';

const saveData = payload => ({
  type: SEARCH_DATA,
  payload
});

const searchData = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveData(data)))
    .catch(error => console.log(error))
  };
};

export default searchData;
