import api from "../../api/api"

export const updatePost = async (id, navigate, values, deletedImages, base64EncodedImages) => {
  const images = base64EncodedImages.map((image) => {
    return { src: image }
  })
  const sendData = {
    ...values,
    images,
    deleted_images: deletedImages,
  }

  const res = await api.put(`/posts/${id}`, sendData)
  console.log(res)
  navigate("/profile/my-posts")
}
