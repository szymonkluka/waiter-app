import shortid from 'shortid';
import { POSTS_URL } from '../config';

export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const getPostsByCategory = ({ posts }, category) => posts.filter(post => post.category === category);

export const deletePost = payload => ({ type: DELETE_POST, payload })
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });
export const getData = (payload) => ({ type: GET_DATA, payload });
export const editedData = (payload) => ({ type: EDIT_DATA, payload })
export const changeStatus = (payload) => ({ type: CHANGE_STATUS, payload });
export const getStatus = ({ tableRequestPending }) => tableRequestPending;


const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST')
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
const GET_DATA = createActionName('GET_DATA');

export const fetchData = () => {
  return (dispatch) => {
    dispatch(changeStatus);
    fetch(`${'http://localhost:3131'}/posts`)
      .then((response) => response.json())
      .then((data) => dispatch(getData(data)))
      .then(() => dispatch(changeStatus));
  };
};

export const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_DATA:
      return statePart.map(post => (post.id === action.payload.id) ? { ...post, ...action.payload } : post);
    case DELETE_POST:
      return statePart.filter(post => post.id !== action.payload)
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id) ? { ...post, ...action.payload } : post);
    case GET_DATA:
      return [...action.payload];
    case CHANGE_STATUS: {
      return action.payload;
    }
    default:
      return statePart;
  }
};

const createActionNames = (action) => {
  return `app/status/${action}`;
};

const CHANGE_STATUS = createActionNames('CHANGE_STATUS');
const EDIT_DATA = createActionNames('EDIT_DATA');

export const addChangedData = (changeData) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changeData),
    };

    fetch(`${POSTS_URL}/posts/${changeData.id}`, options)
      .then((response) => response.json())
      .then((data) => dispatch(editedData(data)));
  };
};


export const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      return action.payload;
    }
    default:
      return statePart;
  }
};


// reducer

