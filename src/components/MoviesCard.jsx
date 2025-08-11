import React from 'react'
import { posterurl } from '../utils/Constants';

const MoviesCard = ({poster_path}) => {

  return (
    <div className='hover:scale-110  transition-all duration-300 ease-in-out cursor-pointer '>
      <img className='w-full h-[240px] object-cover rounded-lg ' src={posterurl + poster_path} alt="poster" />
    </div>
  )
}

export default MoviesCard