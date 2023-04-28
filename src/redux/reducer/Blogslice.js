
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { act } from "react-dom/test-utils";

const initialState = {
    bloger:0,
    pending:null,
    success:null,
    error:null,
}

export const CreateBlog = createAsyncThunk('blog/CreateBlog',async(state,thankAPI)=>{
    try {
        const res = await axios.post('http://localhost:5000/blog',state)
    
        return res.data
    } catch (error) {
        const message = error.response && error.response.data && error.response.message || error.message || error.toString()
        return thankAPI.rejectWithValue(message)
    }
})



export const BlogSlice = createSlice({
    name:'blog',
    initialState,
    reducers:{
       increment :(state,action) => {
        state.bloger += 1
       },
       decrement : (state,action) => {
        state.bloger -= 1
       },
       reset : (state,action) => {
        state.pending = null 
        state.success = null
        state.error = null
       }
    },
    extraReducers: builder => {

        builder.addCase(CreateBlog.pending, (state,action) => {
                 state.pending = true
               
        state.success  = false
        state.error = false
        }) 

        builder.addCase(CreateBlog.fulfilled, (state,action) => {
            state.pending = false
            state.success = true
            state.error = false
        }) 
        builder.addCase(CreateBlog.rejected, (state,action) => {
            state.pending = false
            state.success = false
            state.error = true
            }) 

    }
})

export const { increment ,decrement , reset} = BlogSlice.actions
export default BlogSlice.reducer

