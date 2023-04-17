import { configureStore } from '@reduxjs/toolkit'
import Tourslice from './redux/reducer/Tourslice.js'

const store = configureStore({
   reducer:{
    tour : Tourslice
   }
})

export default store;
