import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"

export const AlertDialog = ({ title, message, handleClose, handleOk, ...props }) => {
  return (
    <Dialog onClose={handleClose} {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            handleOk()
            handleClose()
          }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}
