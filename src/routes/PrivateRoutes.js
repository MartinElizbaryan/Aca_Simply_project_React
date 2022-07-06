import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { getUserAuth, getUserIsAdmin } from "../redux/userSelectors"

export const AuthorizedUserPrivateRoute = () => {
  const auth = useSelector(getUserAuth)
  if (auth) return <Outlet />
  else if (auth === false) return <Navigate to="/signin" />
}

export const AdminPrivateRoute = () => {
  const isAdmin = useSelector(getUserIsAdmin)
  if (isAdmin) return <Outlet />
  else if (isAdmin === false) return <Navigate to="/profile" />
}

export const UnauthorizedUserPrivateRoute = () => {
  const auth = useSelector(getUserAuth)
  if (auth === false) return <Outlet />
  else if (auth) return <Navigate to="/profile" />
}
