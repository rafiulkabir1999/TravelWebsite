import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchPhoto = createAsyncThunk('photo/SearchPhoto',async(state,thankAPI) => {
   console.log(state)
 try {
    const res =await axios.get(`http://localhost:5000/photos/search/${state}`)
    return res.data
 } catch (error) {
    const message = error.response && error.response.data && error.response.message || error.message || error.toString()
    return thankAPI.rejectWithValue(message)
 }
}) 

const initialState = {

      photos:[],
      value:0
 
}

export const PhotoSlice = createSlice({
    name:'photo',
   initialState,
    reducers:{},
    extraReducers:builder=>{
       builder.addCase(SearchPhoto.pending , (state, action ) => {
           
       })
       builder.addCase(SearchPhoto.rejected , (state, action ) => {
           
       })
       builder.addCase(SearchPhoto.fulfilled , (state, action ) => {
              state.photos = action.payload
       })
    },
})

export const {} =PhotoSlice.actions
export default PhotoSlice.reducer 