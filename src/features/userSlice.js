import {createSlice} from '@reduxjs/toolkit'

const initialState={}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducer:{
        addPost: (state,action)=>{
            state.push(action.payload)
        }
    }
});

export default userSlice.reducer