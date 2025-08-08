import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, moviesdata }) => {
  console.log("title , moviesdata", title, moviesdata);

 
  return (
    <div className="py-4 md:py-6 w-full">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-white text-xl md:text-2xl font-light mb-3 md:mb-4">{title}</h1>
        <div className="relative w-full">
          <div className="flex overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
            {moviesdata.map((movie) => (
              <div key={movie.id} className="px-2 flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52">
                <MoviesCard poster_path={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
