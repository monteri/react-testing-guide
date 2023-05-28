import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  value: 0,
  user: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    getUser: async (state) => {
      const result = await axios.get('/someendpoint')
      state.user = result.data
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getUser } = counterSlice.actions

export default counterSlice.reducer