import axios from '../../axios-api';
import {FETCH_ONE_POST_SUCCESS, FETCH_POSTS_SUCCESS, FETCH_COMMENTS_SUCCESS} from "./actionTypes";

export const fetchPostsSuccess = posts => {
  return {type: FETCH_POSTS_SUCCESS, posts};
};

export const fetchPosts = () => {
  return dispatch => {
    axios.get('/posts').then(
      response => {
       return dispatch(fetchPostsSuccess(response.data))
      }
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

export const fetchPostSuccess = post => {
  return {type: FETCH_ONE_POST_SUCCESS, post};
};

export const fetchOnePost = (id) => {
  return dispatch => {
    axios.get('/posts/' + id).then(
      response => {
        return dispatch(fetchPostSuccess(response.data))
      }
    )
  }
};

export const fetchCommentsSuccess = comments => {
  return {type: FETCH_COMMENTS_SUCCESS, comments};
};

export const fetchComments = (id) => {
  return dispatch => {
    axios.get('/comments?post=' + id).then(
      response => {
        return dispatch(fetchCommentsSuccess(response.data))
      }
    )
  }
};

export const addComments = (data) => {
  return (dispatch, getState) => {

    const headers = {
      'Token': getState().users.user.token
    };

    axios.post('/comments', data, {headers}).then(
      response => {
        console.log(response.data);
        return dispatch(fetchComments(response.data.post))
      }
    )
  }
};