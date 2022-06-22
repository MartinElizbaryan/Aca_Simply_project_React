import { useEffect, useState } from "react"
import api from "../api/api"

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await api.get(url)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  return {
    data,
    loading,
    error,
  }
}
