import { useSelector } from "react-redux"
import { getUserId, getUserIsAdmin } from "../redux/user/userSelectors"

export const withPostCreatorChecking = (Component) => {
  return (props) => {
    const userId = props.post.user_id
    const authId = useSelector(getUserId)
    const isAdmin = useSelector(getUserIsAdmin)
    return userId === authId && !isAdmin && <Component {...props} />
  }
}
