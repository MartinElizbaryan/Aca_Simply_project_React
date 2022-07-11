import api from "../../api/api"

export const signIn = async (body) => {
  const res = await api.post("/auth/sign-in", body)
  console.log(res)
  if (res.data.auth) localStorage.setItem("accessToken", res.data.accessToken)
  return res.data
}
