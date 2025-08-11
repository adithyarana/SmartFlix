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
    dispatch(addNowPlayingMovies(data?.results));
   
  };

  useEffect(() => {
    NowplayingMovies();
  }, []);
};

export default useNowplayingMovies;
