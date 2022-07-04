import api from "../../api/api"

export const changePassword = async (body) => {
  const res = await api.patch("/users/change-password", body)
  console.log(res)
  return res.data
}
