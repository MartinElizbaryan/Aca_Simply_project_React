import { useSelector } from "react-redux"
import { getUserAuth } from "../redux/userSelectors"

export const withAuthChecking = (Component) => {
  return (props) => {
    const isAuth = useSelector(getUserAuth)
    return isAuth && <Component {...props} />
  }
}
