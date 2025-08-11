import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    Popularmovies: null,
    TopRatedmovies:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state, action)=>{
      state.Popularmovies = action.payload;
    },
    addTopratedmovies:(state , action)=>{
      state.TopRatedmovies=action.payload
    }

  },
});

export const { addNowPlayingMovies , addPopularMovies , addTopratedmovies} = Movieslice.actions;
export default Movieslice.reducer;
