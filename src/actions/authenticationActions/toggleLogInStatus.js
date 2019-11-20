import { TOGGLE_LOG_IN_STATUS } from '../types';

const toggleLogInStatus = status => ({
  type: TOGGLE_LOG_IN_STATUS,
  status
});

export default toggleLogInStatus;
