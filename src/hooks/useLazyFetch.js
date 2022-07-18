import { useDispatch } from "react-redux"
import api from "../api/api"
import { useCallback } from "react"
import { setIsLoading } from "../redux/loading/loadingSlice"

export default function useLazyFetch() {
  const dispatch = useDispatch()

  const reFetch = useCallback(async (url, method = "get", config) => {
    try {
      dispatch(setIsLoading())
      const response = await api[method](url, config || {})
      return { data: response.data }
    } catch (err) {
      return { error: err }
    } finally {
      dispatch(setIsLoading())
    }
  }, [])

  return reFetch
}
