import { GET_USER } from '../actions';

const INITIAL_STATE = {
  name: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USER:
    return action.payload;

  default:
    return state;
  }
};

export default user;