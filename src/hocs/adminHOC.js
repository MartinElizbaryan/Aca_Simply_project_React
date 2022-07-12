import { getUserIsAdmin } from "../redux/userSelectors"
import { useSelector } from "react-redux"

export const adminHOC = (Component) => {
  // eslint-disable-next-line react/display-name
  return () => {
    const isAdmin = useSelector(getUserIsAdmin)
    return isAdmin && <Component />
  }
}
