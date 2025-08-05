import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice.jsx";

const store = configureStore({
    reducer:{
         user:UserReducer,
    }
})

export default store;