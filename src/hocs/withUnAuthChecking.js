import { useSelector } from "react-redux"
import { getUserAuth } from "../redux/user/userSelectors"

export const withUnAuthChecking = (Component) => {
  return (props) => {
    const isAuth = useSelector(getUserAuth)
    return !isAuth && <Component {...props} />
  }
}
