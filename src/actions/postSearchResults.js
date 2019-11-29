import { POST_SEARCH_RESULTS } from './types';

const postSearchResults = payload => ({
  type: POST_SEARCH_RESULTS,
  payload
});

export default postSearchResults;
