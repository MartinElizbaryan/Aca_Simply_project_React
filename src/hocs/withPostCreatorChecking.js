import { useSelector } from "react-redux"
import { getUserId } from "../redux/user/userSelectors"

export const withPostCreatorChecking = (Component) => {
  return (props) => {
    const userId = props.userId
    const authId = useSelector(getUserId)
    return userId === authId && <Component {...props} />
  }
}
