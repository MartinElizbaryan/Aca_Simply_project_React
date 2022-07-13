import { useSelector } from "react-redux"
import { getUserIsAdmin } from "../redux/userSelectors"

export const adminHOC = (Component) => {
  // eslint-disable-next-line react/display-name
  return () => {
    const isAdmin = useSelector(getUserIsAdmin)
    return isAdmin && <Component />
  }
}
