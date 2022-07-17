import Loading from "../components/Shared/Loading/Loading"
import { Suspense } from "react"

export const withSuspenseAdding = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    )
  }
}
