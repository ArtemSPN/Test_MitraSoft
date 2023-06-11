import { createAction, createSlice } from '@reduxjs/toolkit'
import { getPostsApi } from './postApi'
import { put } from 'redux-saga/effects';

const initialState = {
  isLoading: true,
  error: false,
  page: localStorage.getItem('page') || 1,
  data: []
}

export function* getPostsSaga() {
    const payload = yield getPostsApi(3).then(res => res.data)
    console.log(payload);

    yield put(getPostsSuccess(payload))
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsSuccess: (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = false;
      },
    nextPostPage: (state, action) => {
      localStorage.setItem('page', state.page + 1);
      state.page = state.page + 1;
    },
    prevPostPage: (state, action) => {
      localStorage.setItem('page', state.page - 1);
      state.page = state.page - 1;
    },
  },
})

export const { getPostsSuccess, nextPostPage, prevPostPage} = postSlice.actions
export const GET_POSTS = 'posts/getPosts';
export const getPosts = createAction(GET_POSTS)

export default postSlice.reducer