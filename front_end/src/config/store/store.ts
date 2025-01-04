import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "../reducers/counterSlice.ts"
const store = configureStore({
    reducer: {
        counter : counterSlice,
    }
});

export default store;