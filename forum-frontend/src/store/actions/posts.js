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

export const addPostSuccess = post => {
  return {type: ADD_POST_SUCCESS, post};
};

export const  addPost = (id, token) => {
  return dispatch => {
    return axios.post('/posts', {post: id}, {headers: {"Token": token}}).then(
      response => dispatch(addPostSuccess())
    )
  }
};