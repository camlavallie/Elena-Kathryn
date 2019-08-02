import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ERROR, DELETE_POST } from './types';

const baseUrl = process.env.REACT_APP_BASE_URL;
// Get Posts

export const getPosts = id => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/posts`);
    
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete post

export const deletePost = id => async dispatch => {
  try {
    const res = await axios.delete(`${baseUrl}/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: res.data
    });
    dispatch(setAlert('Post Removed', 'success'))
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

