import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Api_options, topRatedmovies } from '../utils/Constants';
import { addTopratedmovies } from '../utils/MoviesSlice';

const useTopRated = () => {

  const dispatch = useDispatch();

  const TopRatedmovies = async ()=>{
    
    const Apicall = await fetch (topRatedmovies , Api_options)
    const data = await Apicall.json();
    
    
    dispatch(addTopratedmovies(data?.results))
  }

  useEffect(()=>{
    TopRatedmovies();
  },[])
 
}

export default useTopRated