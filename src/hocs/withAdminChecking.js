import { useSelector } from "react-redux"
import { getUserIsAdmin } from "../redux/user/userSelectors"

export const withAdminChecking = (Component) => {
  return (props) => {
    const isAdmin = useSelector(getUserIsAdmin)
    return isAdmin && <Component {...props} />
  }
}
