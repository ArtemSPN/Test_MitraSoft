import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects'
import { useDispatch } from 'react-redux'
import posts, { GET_POSTS, getPostsSaga } from './features/post/postSlice';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_POSTS, getPostsSaga)
  //yield takeEvery(GET_USERS, getUsersSaga)
}

export const store = configureStore({
    reducer: {
        posts,
        //users,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(sagas);
