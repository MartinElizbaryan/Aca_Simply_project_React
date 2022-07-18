import { Box, ListItem, Popover, Typography } from "@mui/material"
import { NotificationAlert } from "../Shared/Alerts/NotificationAlert/NotificationAlert"
import { useEffect, useState } from "react"
import socket from "../../helpers/socket"
import { useFetch } from "../../hooks/useFetch"
import useStyles from "./styles"
import api from "../../api/api"

export const Notifications = ({ handleNotificationClose, changeNotificationsCount, ...props }) => {
  const { data, loading, error, reFetch } = useFetch("/notifications")
  const [notifications, setNotifications] = useState([])
  const classes = useStyles()

  useEffect(() => {
    socket.on("receiveNotification", ({ notification }) => {
      setNotifications((prevState) => [notification, ...prevState])
    })
  }, [])

  useEffect(() => {
    setNotifications(data.notifications || [])
  }, [data])

  const handleMarkButtonClick = async () => {
    const res = await api.patch("/notifications/mark-all")
    setNotifications(res.data.notifications)
    changeNotificationsCount(res.data.count)
  }

  return (
    <>
      <Popover
        {...props}
        onClose={handleNotificationClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: { maxWidth: "300px", maxHeight: "400px" },
        }}
      >
        {notifications.length ? (
          <Box className={classes.markBox}>
            <Box className={classes.markButton} onClick={handleMarkButtonClick}>
              <Typography sx={{ paddingLeft: 1, fontSize: "0.8rem" }}>Mark all as read</Typography>
            </Box>
          </Box>
        ) : (
          <>
            <ListItem>
              <Typography>You have no alerts.</Typography>
            </ListItem>
          </>
        )}
        {notifications.map((notification) => (
          <NotificationAlert
            notification={notification}
            key={notification.id}
            handleNotificationClose={handleNotificationClose}
            changeNotificationsCount={changeNotificationsCount}
            changeNotifications={setNotifications}
          />
        ))}
      </Popover>
    </>
  )
}
