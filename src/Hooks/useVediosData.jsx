import React, { useEffect, useState } from 'react'
import { Api_options, vedioTrailerUrl } from "../utils/Constants";

const useVediosData = (id) => {

    const [trailerdata, settrailerdata] = useState([]);

    const GetMoviesVedios = async () => {
        const Apicall = await fetch(vedioTrailerUrl + id + "/videos", Api_options);
        const VedioData = await Apicall.json();
        settrailerdata(VedioData?.results);
      };
    
      useEffect(() => {
        GetMoviesVedios();
      }, []);
    

    return trailerdata;
}

export default useVediosData;