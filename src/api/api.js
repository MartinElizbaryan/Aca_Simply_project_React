import axios from "axios"
import { store } from "../redux/store"
import { deleteUserInfo } from "../redux/userSlice"

const SERVER_URL = "http://localhost:5000/api/v1"

const api = axios.create({
  withCredentials: true, // for cookie
  baseURL: SERVER_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) store.dispatch(deleteUserInfo())
    throw error
  }
)

export default api
