import React from 'react';

const MoviesDetails = ({ moviedata, movieid }) => {
    if (!moviedata) {
        return <h1>Loading movies data...</h1>;
    }

    if (!movieid) {
        return <h1>No movie ID provided</h1>;
    }



    // Find the movie that matches the movieid
    const movie = moviedata.find(movie => movie.id.toString() === movieid);

    if (!movie) {
        return <h1>Movie not found</h1>;
    }

    const { original_title, overview, vote_average, release_date,popularity } = movie;
   
    
    
    // Format date
    const releaseDate = new Date(release_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
  

    return (
        <div className='p-5 bg-black bg-opacity-70 text-white'>
            <h1 className='text-4xl font-bold mb-4'>{original_title}</h1>
            <div className='flex items-center gap-4 mb-4 text-gray-300'>
                <span className='text-yellow-400 font-semibold'>
                    {vote_average?.toFixed(1)} ⭐
                </span>
                <span>{releaseDate}</span>
                <span>{popularity}</span>
            </div>
            <p className='text-lg max-w-3xl leading-relaxed'>{overview}</p>
        </div>
    );
};

export default MoviesDetails;