import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter:0,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incrementCounter:(state)=>{
            state.counter += 1;
        },
        decrementCounter:(state)=>{
            if(state.counter ==0 ) return
            state.counter -=1;
        },
        resetCounter:(state)=>{
            state.counter = 0;
        }
    }
})

export const {incrementCounter,decrementCounter,resetCounter} = counterSlice.actions;
export default counterSlice.reducer;