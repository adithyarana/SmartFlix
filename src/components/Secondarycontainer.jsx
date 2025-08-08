import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((movie) => movie.movies.nowPlayingMovies);
  const popularmovies = useSelector((popmovies)=>popmovies.movies.Popularmovies)
  console.log("popularmovies", popularmovies);
  

  if (!movies) return;
  if (!popularmovies) return;
  return (
    <div className="-mt-52 relative z-20 p-4">
      {/* movies different sections
      1 in this movies cards are there */}

      <MoviesList title={"Now Playing"} moviesdata={movies} />
      <MoviesList title={"Popular"} moviesdata={popularmovies} />
      
    </div>
  );
};

export default Secondarycontainer;
