import React from "react";
import { auth } from "../utils/firebase.jsx";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";

const Header2 = () => {
  const user = useSelector((state) => state.user.user);
  const photoURL = user?.photoURL;
  console.log("user data ", photoURL);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfull");
      })
      .catch((error) => {
        toast.error(error.message);           
      });
  };

  if(!photoURL){
    return <CgProfile className="w-8 h-8 object-contain rounded-full " />;
  }

  return (
    <div className="flex items-center gap-3 justify-end mt-6  bg-gradient-to-r pr-6 from-[#FDFBD4] to-transparent ">
      <img
        className="w-8 h-8 object-contain rounded-full "
        src={
          photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="userimg"
      />

      <button
        onClick={handleSignOut}
        className="bg-red-600 text-sm hover:bg-red-700 text-white py-2 px-2  text-nowrap h-10 rounded cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header2;
