import React from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { Api_options, apiurl } from "../utils/Constants";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  const NowplayingMovies = async () => {
    const Apicall = await fetch(apiurl, Api_options);

    const data = await Apicall.json();
    console.log("data", data?.results);
    dispatch(addNowPlayingMovies(data?.results));
    console.log("nowplayingmovies", addNowPlayingMovies);
  };

  useEffect(() => {
    NowplayingMovies();
  }, []);
};

export default useNowplayingMovies;
