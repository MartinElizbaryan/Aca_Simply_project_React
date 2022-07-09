import { Alert, Typography } from "@mui/material"
import moment from "moment"
import api from "../../../../api/api"
import { colors } from "../../../../constants/styles"
import useStyles from "./styles"
import { useNavigate } from "react-router-dom"
import socket from "../../../../helpers/socket"

export const NotificationAlert = ({ notification, handleNotificationClose, ...props }) => {
  const classes = useStyles()
  const navigate = useNavigate()

  const deleteNotification = async (e) => {
    e.stopPropagation()
    await api.delete(`/notifications/${notification.id}`)
    socket.emit("updateNotification")
  }

  const handleNotificationClick = async () => {
    if (!notification.is_seen) {
      await api.patch(`/notifications/${notification.id}`)
      socket.emit("updateNotification")
    }
    handleNotificationClose()

    navigate(`posts/${notification.post_id}`)
  }

  return (
    <Alert
      severity="info"
      role="button"
      {...props}
      onClick={handleNotificationClick}
      onClose={deleteNotification}
      className={`${classes.button} ${notification.is_seen ? classes.seen : classes.new}`}
    >
      <Typography variant="caption">{notification.text}</Typography>
      <Typography
        sx={{
          fontSize: "0.6rem",
          color: colors.darkGrey,
        }}
      >
        {moment(notification.created_at).format("lll")}
      </Typography>
    </Alert>
  )
}
