import { createSlice } from "@reduxjs/toolkit";

const Movieslice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    Popularmovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies:(state, action)=>{
      state.Popularmovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies , addPopularMovies } = Movieslice.actions;
export default Movieslice.reducer;
