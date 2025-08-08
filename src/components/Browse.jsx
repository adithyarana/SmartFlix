import React from "react";
import Header2 from "./Header2";
import useNowplayingMovies from "../Hooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Header from "./Header";

const Browse = () => {
  useNowplayingMovies();

  return (
    <div className="">
      <Header />
      <div className="pt-3">
      <Header2 />
      </div>
      <div className="p-4 bg-black">
        <Maincontainer />
        {/* <Secondarycontainer /> */}
      </div>
      {/*
      maincontainer:
         vediobackgrond
         vediotitle

      secondarycintainer:
        movies list differbt types
        in movies list movies card
      */}
    </div>
  );
};

export default Browse;
