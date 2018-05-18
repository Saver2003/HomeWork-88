import {FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS} from "../actions/actionTypes";

const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: action.posts};
    case ADD_POST_SUCCESS:
      return {...state, post: action.posts};
    default:
      return state;
  }
};

export default reducer;