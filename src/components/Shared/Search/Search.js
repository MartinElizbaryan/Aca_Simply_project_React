import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import SearchInput from "../Inputs/SearchInput/SearchInput"
import { useDebounce } from "../../../hooks/useDebounce"

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    const searchQuery = searchParams.get("search") || ""
    setSearchTerm(searchQuery)
  }, [searchParams])

  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm !== searchParams.get("search")) {
      searchParams.set("search", debouncedSearchTerm)
      setSearchParams(searchParams)
    } else if (!debouncedSearchTerm) {
      searchParams.delete("search")
      setSearchParams(searchParams)
    }
  }, [debouncedSearchTerm])

  return (
    <SearchInput
      value={searchTerm}
      onChange={(e) => {
        setSearchTerm(e.target.value)
      }}
    />
  )
}
