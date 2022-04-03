import { deletePost, editPost, newPost } from "../actions";

const INITIAL_STATE = {
    state: '',
  };

 /*  function <NOME DO REDUCER>(state = INITIAL_STATE, action) {
    switch (action.type) {
      case <ACTION TYPE>:
        return { 
  // para conservar o estado anterior uso um spread, para garantir que será criado um novo local na memória.
          ...state,
          keyState: action.state };
      default:
        return state;
    }
  }
  
  export default <NOME DO REDUCER>;\ */