import api from "../../api/api"

export const signOutFunction = async () => {
  const res = await api.delete("/auth/sign-out")
  if (res.data.status === 204) localStorage.removeItem("accessToken")
  return res.data.status
}
