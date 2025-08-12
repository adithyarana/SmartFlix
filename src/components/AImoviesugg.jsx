import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const Aimoviesuggestion = () => {
  const moviesdata = useSelector((store)=>store.ai)

  const {MoviesResult, Moviesnames} = moviesdata 

  if(!Moviesnames) return null;
  if(!MoviesResult) return null;
  
  return (
    <div className='mt-20'>
      
      
      <div className=''>
        {Moviesnames.map((item,index)=>{
          return <MoviesList title={item} key={Moviesnames[index]} moviesdata={MoviesResult[index].results}/> 
        })}
    
      </div>
     
    </div>
  )
}

export default Aimoviesuggestion