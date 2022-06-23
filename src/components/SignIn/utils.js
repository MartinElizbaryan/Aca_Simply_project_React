import api from "../../api/api"

export const signInPost = async (body) => {
  const res = await api.post("/auth/sign-in", body)
  if (res.data.auth) localStorage.setItem("accessToken", res.data.accessToken)
  return res.data
}
