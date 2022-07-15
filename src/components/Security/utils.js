import api from "../../api/api"

export const changePassword = async (body) => {
  const res = await api.patch("/users/change-password", body)
  console.log(res)
  return res.data
}

export const signOutFromOtherDevices = async () => {
  const res = await api.delete("/auth/sign-out-other-devices")
  console.log(res)
  return res.data
}
