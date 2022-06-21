import axios from "axios"

const SERVER_URL = "http://localhost:5000/api/v1"

const api = axios.create({
  withCredentials: true, // for cookie
  baseURL: SERVER_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
  return config
})

export default api
