import { Dialog } from "@mui/material"
import { ErrorAlert } from "../../Alerts/ErrorAlert/ErrorAlert"

export const ErrorDialog = ({ message, handleClose, ...props }) => {
  return (
    <Dialog onClose={handleClose} {...props}>
      <ErrorAlert handleClose={handleClose} message={message} />
    </Dialog>
  )
}
