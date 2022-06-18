import api from "../../helpers/api"

export const signUp = async (body) => {
  const res = await api.post("/auth/sign-up", body)
}