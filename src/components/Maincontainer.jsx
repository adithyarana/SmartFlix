import React from 'react'
import { useSelector } from 'react-redux'
import Vediobackground from './Vediobackground';
import VedioTitle from './VedioTitle';

const Maincontainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (!movies) return null;
  const Onemovie = movies[0];

  return !movies ? <h1 className='text-white'>loading</h1> : (
    <div className="">
      <Vediobackground movieid={Onemovie} />
      <VedioTitle moviedata={Onemovie} />
    </div>
  );
};

export default Maincontainer;
