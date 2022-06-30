import { useCallback, useEffect, useState } from "react"
import api from "../api/api"

export default function useFetch(url, method = "get", config = {}) {
  console.log(config.params)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  // const configJson = JSON.stringify(config)
  const [refresh, setRefresh] = useState({})

  const reCall = useCallback(() => {
    console.log("useFetch ReCall")
    setRefresh({})
  }, [])

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await api[method](url, config)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url, /*configJson,*/ refresh])

  return {
    data,
    loading,
    error,
    reCall,
  }
}
