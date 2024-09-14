import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/countereSlice"

export const store = configureStore({
    reducer:{
        counterReducer,
    }
})