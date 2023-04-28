import { configureStore } from '@reduxjs/toolkit'
import Tourslice from './redux/reducer/Tourslice'
import Blogslice from './redux/reducer/Blogslice'
import { combineReducers } from '@reduxjs/toolkit'

// const rootreducer = combineReducers({
//    tour:Tourslice,
//    blog:Blogslice
// })

const store = configureStore({
   reducer:{
    blog: Blogslice,
    tour : Tourslice,
    
   }
})

export default store;
