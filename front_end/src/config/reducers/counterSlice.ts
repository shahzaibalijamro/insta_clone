import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        count: 0
    },
    reducers: {
        addCount : (state) => {
            state.count = state.count +1;
        },
        reduceCount: (state) => {
            state.count = state.count - 1;
        },
        backToZero: (state) => {
            state.count = 0;
        },
        wishCount: (state:{count:number},action) => {
            console.log(action.payload, "=> payload");
            console.log(state.count, "=> count");
        }
    }
})

export const {addCount,reduceCount,backToZero,wishCount} = counterSlice.actions;

export default counterSlice.reducer;