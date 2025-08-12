import React from "react";
import { posterurl } from "../utils/Constants";
import { FaHandLizard } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MoviesCard = ({ poster_path, title, id }) => {
  if (!poster_path) {
    return (
      <>
        <div className="flex flex-col gap-5">
          <div className=" hover:scale-110 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer bg-gray-700 w-full h-[240px] rounded-lg">
            <span className="text-white text-wrap font-light text-xl text-center ">
              No Poster
            </span>
          </div>
          <p className="text-white text-wrap font-light text-xl ">{title}</p>
        </div>
      </>
    );
  }

  return (
    <Link to={`/moviedetails/${id}`}>
      <div className="hover:scale-110 flex flex-col gap-5 transition-all duration-300 ease-in-out cursor-pointer ">
        <img
          className="w-full h-[240px] object-cover rounded-lg "
          src={posterurl + poster_path}
          alt="poster"
        />
        <p className="text-white text-wrap font-light text-xl ">{title}</p>
      </div>
    </Link>
  );
};

export default MoviesCard;
