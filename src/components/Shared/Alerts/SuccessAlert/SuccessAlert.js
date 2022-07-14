import { Alert, AlertTitle } from "@mui/material"

export const SuccessAlert = ({ message, handleClose, ...props }) => {
  return (
    <Alert severity="success" role="button" onClose={handleClose}>
      <AlertTitle>Success</AlertTitle>
      {message}
    </Alert>
  )
}
