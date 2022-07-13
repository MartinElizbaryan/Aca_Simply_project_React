import { Alert, AlertTitle } from "@mui/material"

export const ErrorAlert = ({ message, handleClose, ...props }) => {
  return (
    // <Dialog open={true} onClose={onClose}>
    <Alert severity="error" role="button" onClose={handleClose}>
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
    // </Dialog>
  )
}
