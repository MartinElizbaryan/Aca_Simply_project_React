import api from "../../api/api"

export const sendToServerHendler = async (values, base64EncodedImages) => {
  console.log(base64EncodedImages)
  const images = base64EncodedImages.map((image) => {
    return { src: image }
  })

  const sendToServerModel = {
    ...values,
    images,
  }
  console.log("sendToServerModel", sendToServerModel)

  const res = await api.post("/posts", sendToServerModel)
  console.log(res)
}
