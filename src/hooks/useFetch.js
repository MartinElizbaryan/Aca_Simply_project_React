import { useCallback, useEffect, useState } from "react"
import api from "../api/api"

// export const useLazyFetch = () => {
//   return []
// }

export function useFetch(url, method = "get", config) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])

  const reFetch = useCallback(async () => {
    try {
      setLoading(true)
      const response = await api[method](url, config || {})
      setData(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }

    return {
      data,
      loading,
      error,
    }
  }, [url, method, config])

  useEffect(() => {
    reFetch()
  }, [reFetch])

  return {
    data,
    loading,
    error,
    reFetch,
  }
}
