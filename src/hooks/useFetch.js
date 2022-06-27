import { useEffect, useState } from "react"
import api from "../api/api"

export default function useFetch(url, config = {}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  const configJson = JSON.stringify(config)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await api.get(url, JSON.parse(configJson))
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url, configJson])

  return {
    data,
    loading,
    error,
  }
}
