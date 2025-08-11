import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((movie) => movie.movies.nowPlayingMovies);
  const popularmovies = useSelector((popmovies)=>popmovies.movies.Popularmovies)
  const topratedmovies = useSelector((toprated)=>toprated.movies.TopRatedmovies)

  

  if (!movies) return;
  if (!popularmovies) return;
  if(!topratedmovies) return;

  return (
    <div className="-mt-64 relative z-20 p-4">
      {/* movies different sections
      1 in this movies cards are there */}

      <MoviesList title={"Now Playing"} moviesdata={movies} />
      <MoviesList title={"Top Rated"} moviesdata={topratedmovies} /> 
      <MoviesList title={"Popular"} moviesdata={popularmovies} />
       
    </div>
  );
};

export default Secondarycontainer;
