import { createSlice } from "@reduxjs/toolkit";

const configslice = createSlice({
    name:"config",
    initialState:{
        Language:"en",
    },
    reducers:{
        changelanguage:(state,action)=>{
            state.Language=action.payload
        }
    }
})

export default configslice.reducer
export const {changelanguage}=configslice.actions