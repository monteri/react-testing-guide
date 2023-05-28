import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice";

export const createStore = (initialState) => configureStore({
  reducer: {
    counter: counterReducer,
    initialState,
  },
})

export const store = createStore();
