import { Alert, AlertTitle } from "@mui/material"

export const SuccessAlert = ({ message, handleClose, ...props }) => {
  return (
    // <Dialog open={true} onClose={onClose}>
    <Alert severity="success" role="button" onClose={handleClose}>
      <AlertTitle>Success</AlertTitle>
      {message}
    </Alert>
    // </Dialog>
  )
}
