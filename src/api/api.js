import axios from "axios"
import { store } from "../redux/store"
import { deleteUserInfo } from "../redux/user/userSlice"
import { cookies } from "../helpers/cookies"

const api = axios.create({
  withCredentials: true, // for cookie
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
  return config
})

api.interceptors.response.use(
  (response) => {
    const accessToken = cookies.get("accessToken")
    cookies.remove("accessToken", { path: "/" })
    if (!accessToken) return response
    localStorage.setItem("accessToken", accessToken)

    return response
  },
  (error) => {
    if (error.response.status === 401) store.dispatch(deleteUserInfo())
    else throw error
  }
)

export default api
