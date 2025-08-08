import React from 'react'
import { useSelector } from 'react-redux'
import Vediobackground from './Vediobackground';
import VedioTitle from './VedioTitle';

const Maincontainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return null;
  const Onemovie = movies[3];

  return (
    <div className="">
      <Vediobackground movieid={Onemovie} />
      <VedioTitle moviedata={Onemovie} />
    </div>
  );
};

export default Maincontainer;
