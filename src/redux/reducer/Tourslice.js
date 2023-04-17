import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    value : 1,
    tour:[],
    createsuccess:null,
    createloading:false,
    createrejected:false,
    joinsuccess:null,
    joinreject:null,
}


//Create Tour API Call
export const CreateTourapi = createAsyncThunk('tour/createTour',async(state,thankAPI)=> {
    try {
      const res = await axios.post('http://localhost:5000/tour/create',state)
      return res;
        
    } catch (error) {
        const message = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        return thankAPI.rejectWithValue(message)
    }
})

//Calling Tour Get Request
export const GetTour = createAsyncThunk('tour/GetTour',async(state,thankAPI)=>{
     try {
        const res = await axios('http://localhost:5000/tour')
        //console.log(res)
        return res.data;

     } catch (error) {
         const message = error.response && error.response.data && error.response.message || error.message || error.toString()
         return thankAPI.rejectWithValue(message)
     }
})

export const jointour = createAsyncThunk("tour/jointour",async(state,thankAPI) => {
    try {
       // console.log(state.tour)
        const res =await axios.post(`http://localhost:5000/tour/${state.tour}/join`,state)
        return res.data;
    } catch (error) {
        const message = error.response && error.response.data && error.response.message || error.message || error.toString()
         return thankAPI.rejectWithValue(message)
    }
})

export const TourSlice = createSlice({
    name:'tour',
    initialState,
    reducers:{

        Add : (state,action) => {
            state.value += 1
        }
    },
    extraReducers: builder =>{

         builder.addCase(CreateTourapi.pending,(state,action)=>{
            state.createloading = true
            state.createsuccess = null
        })
        builder.addCase(CreateTourapi.rejected,(state,action)=>{
            state.createrejected = true
            state.createsuccess = false
        })    
        builder.addCase(CreateTourapi.fulfilled,(state,action)=>{
            state.createsuccess = true
        })
       
         
        
        builder.addCase(GetTour.fulfilled, (state,action) => {
         
        
            state.tour = action.payload
             
            })

        builder.addCase(jointour.pending,(state,action) => {
            state.joinsuccess=null
            state.joinreject=null
        })
        builder.addCase(jointour.rejected,(state,action) => {
            state.joinsuccess=null
            state.joinreject=true
        })
        builder.addCase(jointour.fulfilled,(state,action) => {
            state.joinsuccess = true 
            state.tour = action.payload
            state.joinreject=null
        })

          
    },
       
    
})


export const { Add } = TourSlice.actions
export default  TourSlice.reducer