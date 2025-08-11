import { createSlice } from "@reduxjs/toolkit";

const Aislice = createSlice({
    name:'Ai',
    initialState:{
        showaisearch:false
    },

    reducers:{
        toggleAisearch:(state , action)=>{
           state.showaisearch= !state.showaisearch;
        }
    }
})

export default Aislice.reducer;
export const {toggleAisearch}= Aislice.actions;