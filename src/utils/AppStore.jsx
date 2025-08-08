import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice.jsx";
import MoviesReducer from "./MoviesSlice.jsx";



const store = configureStore({
    reducer:{
         user:UserReducer,
         movies:MoviesReducer,

    }
})

export default store;