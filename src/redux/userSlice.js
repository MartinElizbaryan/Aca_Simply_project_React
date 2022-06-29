import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  auth: false,
  info: {},
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.auth = true
      state.info = action.payload
    },
    signOut: (state, action) => {
      state.auth = false
      state.info = {}
    },
    addUserFavorite: (state, action) => {
      action.payload.favorites.push(state.info)
      state.info.favorites.push(action.payload)
    },
    removeUserFavorite: (state, action) => {
      state.info.favorites = state.info.favorites.filter((favorite) => {
        return favorite.id !== action.payload
      })
    },
  },
})

export const { signIn, signOut, addUserFavorite, removeUserFavorite } = userSlice.actions

export default userSlice.reducer
