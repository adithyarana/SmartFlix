import React from "react";
import Aisearchbar from "./Aisearchbar";
import Aimoviesuggestion from "./AImoviesugg";
import { bannerimage } from "../utils/Constants";

const Aisearchcontainer = () => {
  return (
    <div className="text-white p-6  ">
      {/* <div className=" absolute -z-50 w-full h-full object-cover ">
      <img
              className=" w-full h-full object-cover " 
              src={bannerimage}
              alt="banner"
            />
      </div> */}
      <Aisearchbar />
      <Aimoviesuggestion />
    </div>
  );
};

export default Aisearchcontainer;
