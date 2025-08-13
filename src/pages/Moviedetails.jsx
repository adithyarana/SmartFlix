import React from "react";
import { useParams } from "react-router-dom";
import useVediosData from "../Hooks/useVediosData";
import { useSelector } from "react-redux";
import MoviesDetails from "../components/MoviesDetails";

const Moviedetails = () => {

  // how to get movies datails 
    const movies = useSelector((state) => state?.movies);
    const aimoviesdata = useSelector((state)=>state?.ai)
   
    console.log("movies",movies);
    console.log("aimoviesdata",aimoviesdata);
  



  
  
  
  const { movieId } = useParams();

  const trailerdata = useVediosData(movieId);


  const filterdata = trailerdata.filter((item) => item.type === "Trailer");
  const trailer = filterdata.length ? filterdata[0] : trailerdata[0];
  

  const videoId = trailer?.key;
  const Trailerurl = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`;

  if(!trailer){
    return <h1 className="flex justify-center items-center " ><span  className="text-white text-2xl font-bold ">Loading...</span></h1>
  }


  return (
  <>
    <div className="text-white p-5 relative w-full h-[80vh] overflow-hidden">
      <iframe
      className="absolute top-0 left-0 w-full h-[110vh] object-cover"
      src={Trailerurl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    
    </div>
    <div className="mt-2.5">
    <MoviesDetails moviedata={movies} aimoviesdata={aimoviesdata}  movieid={movieId} />
   
  
    </div>
  </>
  )
 
};

export default Moviedetails;
