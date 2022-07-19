import { createSlice } from "@reduxjs/toolkit"

const preferColorScheme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"))
  .matches
  ? "dark"
  : "light"

const initialState = {
  themeMode: localStorage.getItem("theme") || preferColorScheme,
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
