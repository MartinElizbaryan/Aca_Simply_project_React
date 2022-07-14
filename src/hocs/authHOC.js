import { useSelector } from "react-redux"
import { getUserAuth } from "../redux/userSelectors"

export const authHOC = (Component) => {
  // eslint-disable-next-line react/display-name
  return () => {
    const isAuth = useSelector(getUserAuth)
    return isAuth && <Component />
  }
}
