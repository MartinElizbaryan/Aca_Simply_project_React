import api from "../../helpers/api"

export const signIn = async (email, password) => {
  console.log("signIn", email, password)
  const res = await api.post("/auth/sign-in", {
    email,
    password,
  })
  if (res.data.auth) localStorage.setItem("accessToken", res.data.accessToken)
}
