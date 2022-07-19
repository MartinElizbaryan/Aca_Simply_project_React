import api from "../../api/api"

export const signOutFromOtherDevices = async (body = {}) => {
  const res = await api.delete("/auth/sign-out-other-devices", body)
  console.log(res)
  return res.data
}
