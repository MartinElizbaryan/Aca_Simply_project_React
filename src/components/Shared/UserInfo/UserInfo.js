import { Typography } from "@mui/material"
import UserAvatar from "../Avatars/UserAvatar/UserAvatar"
import { getUserFullName } from "../../../helpers/utils"
import { withIdChecking } from "../../../hocs/withIdChecking"

export function UserInfo({ user, ...props }) {
  return (
    <>
      <UserAvatar user={user} sx={{ marginRight: 2 }} />
      <Typography variant="body1">{getUserFullName(user)}</Typography>
    </>
  )
}

export default withIdChecking(UserInfo)
