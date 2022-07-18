import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { setIsLoading } from "../redux/loading/loadingSlice"
import api from "../api/api"

export default function useLazyFetch() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const apiRequest = useCallback(async (url, method = "get", config) => {
    try {
      dispatch(setIsLoading())
      const response = await api[method](url, config || {})
      setData(response.data)
    } catch (err) {
      setError(err)
    } finally {
      dispatch(setIsLoading())
    }
  }, [])

  return {
    data,
    error,
    request: apiRequest,
  }
}
