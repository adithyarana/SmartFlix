import React from "react";
import { auth } from "../utils/firebase.jsx";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { toggleAisearch } from "../utils/Aislice.jsx";
import { selectoptinsnames } from "../utils/languageconstant";
import { changelanguage } from "../utils/Configslice.jsx";

const Header2 = () => {
  const user = useSelector((state) => state.user.user);
  const photoURL = user?.photoURL;
  const dispatch = useDispatch();
  const showaisearch = useSelector((store) => store.ai.showaisearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleaisearch = () => {
    // toggle ai search
    dispatch(toggleAisearch());
  };

  const handlelanguagechange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  if (!photoURL) {
    return <CgProfile className="w-8 h-8 object-contain rounded-full " />;
  }

  return (
    <div className="flex items-center gap-3 justify-end mt-6  pr-5 pb-6">
      {showaisearch && (
        <select
          onChange={handlelanguagechange}
          className="text-white py-2 px-2 rounded text-sm cursor-pointer"
        >
          {selectoptinsnames.map((option, index) => {
            return (
              <option
                key={index}
                className="text-white bg-black"
                value={option.identifier}
              >
                {option.name}
              </option>
            );
          })}
        </select>
      )}

      <button
        onClick={handleaisearch}
        className="text-white bg-red-600 py-2 px-2 rounded text-sm cursor-pointer hover:bg-red-700"
      >
       {showaisearch ?"Home":"AI Movies Search"}
      </button>

      <button
        onClick={handleSignOut}
        className="bg-red-600 text-sm hover:bg-red-700 text-white py-2 px-2  text-nowrap h-10 rounded cursor-pointer"
      >
        Sign Out
      </button>

      <img
        className="w-8 h-8 object-contain rounded-full "
        src={
          photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="userimg"
      />
    </div>
  );
};

export default Header2;
