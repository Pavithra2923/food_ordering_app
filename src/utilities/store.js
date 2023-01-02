 import { configureStore } from '@reduxjs/toolkit'
 import counteruser from '../Slices/HomeSlice'

 export const store = configureStore({
   reducer: {
    counteruser,
   },
 })