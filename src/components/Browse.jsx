import React from "react";
import Header2 from "./Header2";
import useNowplayingMovies from "../Hooks/useNowplayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import Header from "./Header";
import usePopularmovies from "../Hooks/usePopularmovies";
import useTopRated from "../Hooks/useTopRated";
import Aisearchcontainer from "./Aisearchcontainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const aisearch = useSelector((store) => store.ai.showaisearch);
  console.log(aisearch);


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
    <div className="">
      <Header />
      <div className="pt-3">
        <Header2 />

        {aisearch ? (
          <Aisearchcontainer />
        ) : (
          <>
            <Maincontainer />
            <Secondarycontainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
