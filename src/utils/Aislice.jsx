import { createSlice } from "@reduxjs/toolkit";

const Aislice = createSlice({
    name:'Ai',
    initialState:{
        showaisearch:false,
        Moviesnames:null,
        MoviesResult:null,
    },

    reducers:{
        toggleAisearch:(state , action)=>{
           state.showaisearch= !state.showaisearch;
        },
        addAimoviesResult:(state, action)=>{
            const {Moviesnames, MoviesResult} = action.payload
            state.Moviesnames= Moviesnames;
            state.MoviesResult= MoviesResult;
        }
    }
})

export default Aislice.reducer;
export const {toggleAisearch,addAimoviesResult}= Aislice.actions;