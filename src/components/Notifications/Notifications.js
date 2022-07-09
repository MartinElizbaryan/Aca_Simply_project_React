import { Popover } from "@mui/material"
import { NotificationAlert } from "../Shared/Alerts/NotificationAlert/NotificationAlert"
import { useEffect, useState } from "react"
import socket from "../../helpers/socket"
import { useFetch } from "../../hooks/useFetch"

export const Notifications = ({ handleNotificationClose, ...props }) => {
  const { data, loading, error, reFetch } = useFetch("/notifications")
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    socket.on("receiveNotification", ({ notification }) => {
      setNotifications((prevState) => [notification, ...prevState])
    })
    socket.on("receiveUpdatedNotifications", ({ notifications }) => {
      setNotifications(notifications)
    })
  }, [])

  useEffect(() => {
    setNotifications(data.notifications || [])
  }, [data])

  return (
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
        style: { maxWidth: "400px", maxHeight: "400px" },
      }}
    >
      {notifications.map((notification) => (
        <NotificationAlert
          notification={notification}
          key={notification.id}
          handleNotificationClose={handleNotificationClose}
        />
      ))}
    </Popover>
  )
}