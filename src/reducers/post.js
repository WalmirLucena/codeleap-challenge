import { ADD_POST, DELETE_POST, EDIT_POST } from "../actions";

const INITIAL_STATE = {
    post: [],
  };

  const post = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case ADD_POST:
      return {...state, post: [...state.post, {...action.payload, id: state.post.length}]};
    case DELETE_POST:
      return {...state, post: state.post.filter((item)=> item.name !== action.payload)}
    case EDIT_POST:
      return {...state, post: state.post.map((item) => {
        if(item.name === action.payload.name){
          return [...item, ...action.payload]
        }
        return item;
      })}
  
    default:
      return state;
    }
  };
  
  export default post;