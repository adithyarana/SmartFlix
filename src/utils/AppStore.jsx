import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Userslice.jsx";
import MoviesReducer from "./MoviesSlice.jsx";
import Aireducer from "./Aislice.jsx";
import configreducer from "./Configslice.jsx";


const store = configureStore({
    reducer:{
         user:UserReducer,
         movies:MoviesReducer,
         ai:Aireducer,
         config:configreducer,
    }
})

export default store;