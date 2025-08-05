import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        adduser: (state, action) => {
            state.user = action.payload;
        },
        removeuser: (state) => {
            state.user = null;
        }
    }
})

export const {adduser , removeuser}= Userslice.actions;
export default Userslice.reducer;