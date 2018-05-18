import axios from '../../axios-api';
import {FETCH_POSTS_SUCCESS, ADD_POST_SUCCESS} from "./actionTypes";

export const fetchPostsSuccess = posts => {
  return {type: FETCH_POSTS_SUCCESS, posts};
};

export const fetchPosts = () => {
  return dispatch => {
    axios.get('/posts').then(
      response => dispatch(fetchPostsSuccess(response.data))
    )
  }
};



export const addPost = (id) => {
  return (dispatch, getState) => {
    for (let item of id.entries()) {
      console.log(item)
    }
    return axios.post('/posts', id, {headers: {"Token": getState().users.user.token}}).then(
      response => console.log(response.data)
    )
  }
};