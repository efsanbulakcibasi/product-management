import { createSlice } from "@reduxjs/toolkit"
import { createSearchParams } from "react-router-dom"

const initialState = {
    value:0,
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        incrementBytAmount: (state,aciton) => {
            state.value += aciton.payload
        },
    }
})

export const {increment,decrement,incrementBytAmount} = counterSlice.actions

export default counterSlice.reducer