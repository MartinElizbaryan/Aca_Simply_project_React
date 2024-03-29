import { useNavigate } from "react-router-dom"
import moment from "moment"
import { Alert, Box, Button, Typography, useTheme } from "@mui/material"
import api from "../../../../api/api"
import { colors } from "../../../../constants/styles"
import useStyles from "./styles"

export const NotificationAlert = ({
  notification,
  handleNotificationClose,
  changeNotifications,
  changeNotificationsCount,
  ...props
}) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const classes = useStyles()

  const deleteNotification = async (e) => {
    e.stopPropagation()
    const res = await api.delete(`/notifications/${notification.id}`)
    changeNotifications(res.data.notifications)
    changeNotificationsCount(res.data.count)
  }

  const handleNotificationClick = async () => {
    if (!notification.is_seen) {
      const res = await api.patch(`/notifications/${notification.id}`)
      changeNotifications(res.data.notifications)
      changeNotificationsCount(res.data.count)
    }
    handleNotificationClose()

    if (!notification.post_id) return
    navigate(`posts/${notification.post_id}`)
  }

  const handleDelayButtonClick = async (e) => {
    e.stopPropagation()
    const res = await api.patch(`/notifications/${notification.id}/delay`, {
      postId: notification.post_id,
    })
    changeNotifications(res.data.notifications)
    changeNotificationsCount(res.data.count)
    handleNotificationClose()

    navigate(`posts/${notification.post_id}`)
  }

  return (
    <Alert
      severity="info"
      {...props}
      onClick={handleNotificationClick}
      onClose={deleteNotification}
      className={`${classes.button} ${notification.is_seen ? classes.seen : classes.new}`}
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.notificationHover,
        },
      }}
    >
      <Typography variant="caption">{notification.text}</Typography>
      {notification.type === "beforePostDeletion" && (
        <Box>
          <Button
            sx={{ textTransform: "unset", fontSize: "0.8rem", padding: "6px 0px" }}
            onClick={handleDelayButtonClick}
          >
            Delay till {moment().add(30, "days").format("ll")}
          </Button>
        </Box>
      )}
      <Typography
        sx={{
          fontSize: "0.6rem",
          color: colors.darkGrey,
          textAlign: "end",
        }}
      >
        {moment(notification.created_at).format("lll")}
      </Typography>
    </Alert>
  )
}
