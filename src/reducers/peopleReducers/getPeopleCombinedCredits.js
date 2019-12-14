import { GET_PEOPLE_COMBINED_CREDITS } from '../../actions/types';

const initialState = {
  cast: []
};

const getPeopleCombinedCredits = (state = initialState, action) => {
  switch(action.type) {
    case GET_PEOPLE_COMBINED_CREDITS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getPeopleCombinedCredits;
