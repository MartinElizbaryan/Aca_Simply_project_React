import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import themeReducer from "./theme/themeSlice"
import loadingReducer from "./loading/loadingSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    loading: loadingReducer,
  },
})
