import { Dialog } from "@mui/material"
import { SuccessAlert } from "../../Alerts/SuccessAlert/SuccessAlert"

export const SuccessDialog = ({ message, handleClose, ...props }) => {
  return (
    <Dialog onClose={handleClose} {...props}>
      <SuccessAlert handleClose={handleClose} message={message} />
    </Dialog>
  )
}
