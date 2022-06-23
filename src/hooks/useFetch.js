import { useEffect, useState } from "react"
import api from "../api/api"
import { useSearchParams } from "react-router-dom"

export default function useFetch(url) {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries([...searchParams])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await api.get(url, {
          params,
        })
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
