import React from "react";
import { useDispatch } from "react-redux";
import { Api_options, popularapiurl } from "../utils/Constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = async () => {
    const Apicall = await fetch(popularapiurl, Api_options);

    const data = await Apicall.json();
    dispatch(addPopularMovies(data?.results));
  };

  useEffect(() => {
    PopularMovies();
  }, []);
};

export default usePopularmovies;
