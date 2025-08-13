import React, { useEffect, useState } from "react";
const MoviesDetails = ({ moviedata, aimoviesdata, movieid }) => {
  const [movie, setmovies] = useState([]);

  if (!moviedata) {
    return <h1>Loading movies data...</h1>;
  }

  if (!movieid) {
    return <h1>No movie ID provided</h1>;
  }

  if (!aimoviesdata) {
    return null;
  }

  useEffect(() => {
    if (moviedata) {
      const nowplayingmovies = moviedata?.nowPlayingMovies;
      const popularmovies = moviedata?.Popularmovies;
      const topratedmovies = moviedata?.TopRatedmovies;
      const AiMoviesResult = aimoviesdata?.MoviesResult;

      const AiMoviesResultdata =
        AiMoviesResult?.flatMap((movie) => movie?.results || []) || [];

      console.log("AiMoviesResult", AiMoviesResultdata);

      // Find the movie that matches the movieid
      const foundmovies = [
        ...(nowplayingmovies || []),
        ...(popularmovies || []),
        ...(topratedmovies || []),
        ...AiMoviesResultdata,
      ]
        .flat()
        .find((movie) => movie?.id?.toString() === movieid);

      if (foundmovies) {
        setmovies(foundmovies);
        localStorage.setItem("movie", JSON.stringify(foundmovies));
        return;
      }
    }

    // if after refrsh the store data is empty try from local storage
    const saveddata = localStorage.getItem("movie");
    if (saveddata) {
      setmovies(JSON.parse(saveddata));
    }
  }, [moviedata, aimoviesdata, movieid]);

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  const { original_title, overview, vote_average, release_date, popularity } =
    movie;

  // Format date
  const releaseDate = new Date(release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-20 py-10 bg-black bg-opacity-70 text-white">
      <h1 className="text-4xl font-bold mb-4 text-orange-500">
        {original_title}
      </h1>
      <div className="flex items-center gap-4 mb-4 text-gray-300">
        <span className="text-yellow-400 font-semibold">
          {vote_average?.toFixed(1)} ⭐
        </span>
        <span>{releaseDate}</span>
        <span className="flex gap-1">
          <p>Popularity :</p>
          {popularity}
        </span>
      </div>
      <p className="text-lg max-w-3xl leading-relaxed">{overview}</p>
    </div>
  );
};

export default MoviesDetails;
