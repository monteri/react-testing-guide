import { create } from 'zustand'
import axios from "axios";

const useCountStore = create((set) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  getUser: async () => {
    const result = await axios.get('/someendpoint')
    set({ user: result.data })
  },
}))

export default useCountStore;