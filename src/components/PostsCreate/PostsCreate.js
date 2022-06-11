import React, {useEffect, useState} from 'react'
import axios from "axios"



export default function Home() {

  const [fileInputState, setFileInputState] = useState("")
  const [selectedFile, setSelectedFile] = useState("")
  const [previewSource, setPreviewSource] = useState("")

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      console.log(reader.result)
      setPreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (e) => {
    console.log("submit")
    e.preventDefault();
    if(!previewSource) return;

    uploadImage(previewSource)
  }

  const uploadImage = async (base64EncodedImage) => {

    const response = await axios.post("http://localhost:5001/api/v1/posts", {
      name: "awdwad",
      description: "lijkljiljklji",
      images: [{
        src: base64EncodedImage,
      }],
      questions: []
    })
  }

  return (
    <>
      <h1>Posts Create</h1>
      <form onSubmit={handleSubmitFile}>

        <input
          name="image"
          type="file"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />

        {previewSource && (
          <img src={previewSource} alt=""/>
        )}

        <br/>

        <button>Save</button>

      </form>

    </>
  )
}
