import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

export const AuthorizedUserPrivateRoute = () => {
  const { auth } = useSelector((state) => state.user)
  if (auth) return <Outlet />
  else if (auth === false) return <Navigate to="/signin" />
}

export const AdminPrivateRoute = () => {
  const { is_admin } = useSelector((state) => state.user.info)
  if (is_admin) return <Outlet />
  else if (is_admin === false) return <Navigate to="/profile" />
}

export const UnauthorizedUserPrivateRoute = () => {
  const { auth } = useSelector((state) => state.user)
  if (auth === false) return <Outlet />
  else if (auth) return <Navigate to="/profile" />
}
