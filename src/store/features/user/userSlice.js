import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:"",
    lastName:"",
    email:""
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setName:(state,aciton) => {
            state.name = aciton.payload
        },

        setLastName: (state,action) => {
            state.lastName = action.payload
        },
        setEmail:(state,action) => {
            state.email = action.payload
        }

    }
})

export const {setName,setLastName,setEmail}  =userSlice.actions

export default userSlice.reducer