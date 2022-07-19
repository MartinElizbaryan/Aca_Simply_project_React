import api from "../../api/api"

export const sendToServerHendler = async (values, base64EncodedImages) => {
  const images = base64EncodedImages.map((image) => {
    return { src: image }
  })

  const sendToServerModel = {
    ...values,
    images,
  }

  const res = await api.post("/posts", sendToServerModel)
}
