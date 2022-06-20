import api from "../../api/api"

export const sendMessage = async (body) => {
  const res = await api.post("/contact/send", body)
  console.log(res)
}