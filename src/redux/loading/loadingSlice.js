import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = !state.isLoading
    },
  },
})

export const { setIsLoading } = loadingSlice.actions

export default loadingSlice.reducer
