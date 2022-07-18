import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  info: {},
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.auth = true
      state.info = action.payload
    },
    deleteUserInfo: (state, action) => {
      state.auth = false
      state.info = {}
    },
  },
})

export const { setUserInfo, deleteUserInfo } = userSlice.actions

export default userSlice.reducer
