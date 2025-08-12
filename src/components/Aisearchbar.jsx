import React, { useEffect, useRef, useState } from "react";
import { lang } from "../utils/languageconstant";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/OpenAi";
import { toast } from "react-toastify";
import { Api_options, searchmoviesurl } from "../utils/Constants";
import { addAimoviesResult } from "../utils/Aislice";

// this is the dynamic data cominmg form languafe constant that change the language form evey state change in redux after clicking the button

const Aisearchbar = () => {
  const languagechange = useSelector((lang) => lang.config.Language);
  // const [error , seterror]= useState("")
  const searchtext = useRef(null);
  const dispatch = useDispatch();

  // search movies in tmdb data base
  const SearchMoviesTmdb = async (movies) => {
    try {
      const Response = await fetch(searchmoviesurl + movies, Api_options);
      const data = await Response.json();
      console.log("data",data);

      return data;
    } catch (error) {
      console.log(error);
    }
  };



  const handleaisearch = async () => {
    // make a api call to gpt to get movies results

    if(!searchtext.current.value) {
      toast.error("Please enter what type of movies you want")
      return;
    }

    try {
      const promt =
        "Act as Movie Recommendation System and suggest some movies for the query" +
        searchtext.current.value +
        "only give me names of 5 movies , comma separated and do not give any other text or description like the example result give a head . Example: movie name 1 , movie name 2 , movie name 3 , movie name 4 , movie name 5";
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: promt,
      });
      console.log(response.text.split(","));
      toast.success("Fetched the Movies Data !");

      // now we search the ai ganerated movies data in tmdb movies search api
      const AiMovies = response.text.split(",");
      const moviesdata = await Promise.all(AiMovies.map((movies)=>SearchMoviesTmdb(movies)))  // all the promises are resolved then only the result will come 
      console.log("moviesdata",moviesdata);
      dispatch(addAimoviesResult({ Moviesnames:AiMovies , MoviesResult:moviesdata})); // pushing in store

    } catch (error) {
      toast.error("Error in ai search");
    }

    // const searchtextvalue = searchtext.current.value;
    // console.log(searchtextvalue);
  };

  return (
    <div className="">
     <div className="flex flex-col gap-1">
     <h1 className="text-white text-2xl m-auto font-bold text-center">{lang[languagechange].h1tag} </h1>
     <p className="text-center font-light text-sm text-wrap ">{lang[languagechange].para}</p>
     </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="py-2 mt-4 px-4 w-[800px] flex m-auto gap-6"
      >
        <input
          ref={searchtext}
          className="w-full p-2 rounded-md border-white border-2"
          type="text"
          placeholder={lang[languagechange].placeholder}
          required
          
        />
      
        <button
          onClick={handleaisearch}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded cursor-pointer flex items-center gap-2 opacity-80"
        >
          {lang[languagechange].search}
        </button>
        {/* {error && <p className="text-red-600 text-wrap">{error}</p>} */}
      </form>
    
    </div>
  );
};

export default Aisearchbar;
