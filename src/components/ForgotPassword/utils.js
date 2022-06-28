import api from "../../api/api"

export const forgotPasswordRequest = async (body) => {
  const res = await api.post("/auth/forgot-password", body)
  return res.data.status
}

export const sixDigitRequest = async (body) => {
  const res = await api.post("/auth/verify-code", body)
  return res
}

export const changePassword = async (body) => {
  const res = await api.post("/auth/change-password", body)
  return res
}
