import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  themeMode: localStorage.getItem("theme") || "light",
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload
    },
  },
})

export const { setThemeMode } = themeSlice.actions

export default themeSlice.reducer
