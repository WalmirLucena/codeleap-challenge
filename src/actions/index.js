export const ADD = 'ADD';
export const DELETE = "DELETE";
export const EDIT = "EDIT"

export const newPost = (payload) => (
      {
        type: ADD,
        payload,
      }
    )

export const deletePost = (payload) => (
        {
          type: DELETE,
          payload,
        }
      )

export const editPost = (payload) => (
        {
          type: EDIT,
          payload,
        }
      )