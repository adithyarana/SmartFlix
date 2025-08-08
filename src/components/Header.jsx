import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { adduser, removeuser } from "../utils/Userslice.jsx";
import { useDispatch } from "react-redux";

const Header = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch(); // send the user data to the store 
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Unsubscribe to prevent memory leaks
  }, [dispatch]);

  return (
    <div className="absolute top-0 left-0  ">
      <img
        className="w-40 h-30 ml-9 mb-10 object-contain"
        src="/logoo.png"
        alt="Smartflix logo"
      />
    
    </div>
  );
};

export default Header;
