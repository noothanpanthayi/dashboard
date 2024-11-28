import React from "react";
import styles from "./moviesaga.module.css";
import AppMain from "./appmain/AppMain";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

type movie = {
  id: number;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
};

interface State {
  moviesList: movie[];
}

const inidialState: State = {
  moviesList: [],
};

const moviesReducer = (state = inidialState, action: any) => {
  switch (action.type) {
    case "SETMOVIES":
      return { ...state, moviesList: action.payload };
    default:
      return state;
  }
};

export async function requestGetMovies() {
  try {
    const response = await fetch("https://dummyapi.online/api/movies");
    if (!response.ok) {
      throw new Error("Invalid Url");
    }
    const moviesList = await response.json();
    return moviesList;
  } catch (e: any) {
    console.log(e.message);
  }
}

function* handleGetMovies(): any {
  try {
    const data = yield call(requestGetMovies);
    yield put({ type: "SETMOVIES", payload: data });
  } catch (e: any) {
    console.log(e.message);
  }
}

const MovieSaga = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const reducers = combineReducers({
    moviesList: moviesReducer,
  });

  const store = createStore(reducers, {}, applyMiddleware(...middleware));

  function* watcherSaga() {
    yield takeLatest("GETMOVIES", handleGetMovies);
  }

  sagaMiddleware.run(watcherSaga);

  return (
    <>
      <h2 className={container}>Movie List using Redux Saga</h2>
      <div className={description}>This application makes an http request into a remote server, 
        fetches the data using Redux Saga middleware and update it in the redux store.
        Show Movies list fetches the data from the directly from the redux store and list it.
      </div>
      <Provider store={store}>
        <AppMain />
      </Provider>
    </>
  );
};

const { container,description } = styles;

export default MovieSaga;
