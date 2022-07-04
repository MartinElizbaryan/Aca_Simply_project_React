import api from "../../api/api"

export const editUserInfo = async (body) => {
  const res = await api.put("/users", body)
  console.log(res)
  return res.data
}
