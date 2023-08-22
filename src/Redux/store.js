import { configureStore } from "@reduxjs/toolkit";
import counterReducers from '../Redux/features/counter/counterSlice'

export const store = configureStore(
    {
        reducer: {
            counter: counterReducers,
        }
    }
)