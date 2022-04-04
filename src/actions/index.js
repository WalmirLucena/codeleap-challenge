export const ADD_POST = 'ADD';
export const DELETE_POST = 'DELETE';
export const EDIT_POST = 'EDIT';
export const GET_USER = 'GET_USER'

export const getUser = (payload) => ({
    type: GET_USER,
    payload,
  });

export const newPost = (payload) => (
      {
        type: ADD_POST,
        payload,
      }
    )

export const deletePost = (payload) => (
        {
          type: DELETE_POST,
          payload,
        }
      )

export const editPost = (payload) => (
        {
          type: EDIT_POST,
          payload,
        }
      )