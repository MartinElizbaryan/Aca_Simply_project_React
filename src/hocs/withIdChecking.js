import { useSelector } from "react-redux"
import { getUserId } from "../redux/userSelectors"
import { useParams } from "react-router-dom"

export const withIdChecking = (Component) => {
  return (props) => {
    const { id } = useParams()
    const userId = useSelector(getUserId)
    return id && <Component {...props} />
  }
}
