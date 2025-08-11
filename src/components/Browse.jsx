import React from "react";
import Header2 from "./Header2";
import useNowplayingMovies from "../Hooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Header from "./Header";
import usePopularmovies from "../Hooks/usePopularmovies";
import useTopRated from "../Hooks/useTopRated";

const Browse = () => {

  // Api calls using custom hooks 
  useNowplayingMovies();
  usePopularmovies();
  useTopRated();

  {
    /*
      maincontainer:
         vediobackgrond
         vediotitle

      secondarycintainer:
        movies list differbt types
        in movies list movies card
      */
  }

  return (
    <div className="h-screen w-screen  ">
      <Header />
      <div className="pt-3">
        <Header2 />
      </div>
      <div className="">
        <Maincontainer />
        <Secondarycontainer />
      </div>
    </div>
  );
};

export default Browse;
