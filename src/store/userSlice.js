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
  },
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
