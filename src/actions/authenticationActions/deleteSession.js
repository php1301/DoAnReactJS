import { DELETE_SESSION } from '../types';

const saveDeleteSession = payload => ({
  type: DELETE_SESSION,
  payload
});

const deleteSession = (url, sessionId) => {
  return dispatch => {
    fetch(url, {
      method: 'DELETE',
      headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
      body: JSON.stringify({
        session_id: sessionId
      })
    })
    .then(res => res.json())
    .then(data => dispatch(saveDeleteSession(data)))
    .catch(error => console.log(error))
  };
};

export default deleteSession;
