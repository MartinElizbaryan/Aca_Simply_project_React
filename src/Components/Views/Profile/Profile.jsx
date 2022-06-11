import { useState, useEffect } from "react"
import api from "../../../helpers/api"

export default function Profile() {
  useEffect(() => {
    ;(async () => {
      const res = await api.get("/users/me")
      console.log(res)
    })()
  }, [])

  return (
    <>
      <div>Profile</div>
    </>
  )
}
