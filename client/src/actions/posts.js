import *as api from '../api';

// Action Creators :- they are functions that return action objects
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error) {
        console.log(error.message);
    }
}; 

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE_POST', payload: data });
    } catch(error) {
        console.log(error.message);
    }
}