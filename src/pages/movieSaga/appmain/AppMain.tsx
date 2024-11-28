import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import ShowMoviesList from "./ShowMoviesList";
import styles from "../moviesaga.module.css";
import { useState } from "react";

const AppMain = () => {
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

  const [state, setState] = useState({
    showMoviesList: false,
  });

  const moviesList: any = useSelector((state: State) => state.moviesList);

  const dispatch = useDispatch();

  const doDispatch = () => {
    dispatch({ type: "GETMOVIES" });
    setState((prevState) => {
      return {
        ...prevState,
        showMoviesList: false,
      };
    });
  };

  const showMoviesList = () => {
    setState((prevState) => {
      return {
        ...prevState,
        showMoviesList: moviesList.moviesList.length ? true : false,
      };
    });
  };

  const codeFragment = `
import createSagaMiddleware from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";

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

const moviesReducer = (state = inidialState, action: any) => {
  switch (action.type) {
    case "SETMOVIES":
      return { ...state, moviesList: action.payload };
    default:
      return state;
  }
};
   
const doDispatch = () => {
    dispatch({ type: "GETMOVIES" });
    setState((prevState) => {
      return {
        ...prevState,
        showMoviesList: false,
      };
    });
  };
  `;
  return (
    <>
      <div className={buttonsPanel}>
        <Button onClick={doDispatch}>Fetch Movies List</Button>
        <Button onClick={showMoviesList}>Show Movies List</Button>
      </div>
      <h2>Recieved Movies {moviesList.moviesList.length}</h2>
      {state.showMoviesList && moviesList.moviesList.length > 0 && (
        <ShowMoviesList />
      )}
      <h3>Middleware Setup</h3>
      <div className={code}>
      <pre>
        <code>
      {codeFragment}
      </code>
      </pre>
      </div>
    </>
  );
};

const { buttonsPanel, code } = styles;

export default AppMain;
