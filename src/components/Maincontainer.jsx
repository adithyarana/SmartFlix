import React from 'react'
import { useSelector } from 'react-redux'
import Vediobackground from './Vediobackground';
import VedioTitle from './VedioTitle';

const Maincontainer = () => {

    const movies = useSelector((state)=>state.movies?.nowPlayingMovies);

    if(movies == null) return;
    const Onemovie= movies[0];
    
    
    
  return (
    <div>
        <Vediobackground movieid={Onemovie}/>
        <VedioTitle moviedata ={Onemovie}/>
    </div>
  )
}

export default Maincontainer