import React from "react";
import useVediosData from "../Hooks/useVediosData";

const Vediobackground = ({ movieid }) => {
 const { id } = movieid;
  const trailerdata = useVediosData(id);


  const filterdata = trailerdata.filter((item) => item.type === "Trailer");
  const trailer = filterdata.length ? filterdata[0] : trailerdata[0];

  const videoId = trailer?.key;
  const Trailerurl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1&rel=0`;


  return (
    <div className="relative w-full h-screen overflow-hidden">

    <iframe
      className="absolute top-0 left-0 w-screen h-screen object-cover"
      src={Trailerurl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
  </div>
  );
};

export default Vediobackground;
