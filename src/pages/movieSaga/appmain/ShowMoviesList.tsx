import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "../moviesaga.module.css";

type Movie = {
  id: number;
  movie: string;
  rating: number;
  image: string;
  imdb_url: string;
};

interface State {
  moviesList: Movie[];
}

const ShowMoviesList = () => {
  const moviesList: any = useSelector((state: State) => state.moviesList);

  return (
    <>
      <div>ShowMoviesList</div>
      <div className={grid}>
        {moviesList?.moviesList?.map(
          ({ id, movie, rating, image, imdb_url }: Movie) => {
            return <Fragment key={id}>
                <div>{id}</div>
                <div>{movie}</div>
                <div>{rating}</div>
                <div><a target="_blank" rel="noreferrer" href={imdb_url}>{imdb_url}</a></div>
              </Fragment>
          }
        )}
      </div>
    </>
  );
};

const { grid } = styles;

export default ShowMoviesList;
