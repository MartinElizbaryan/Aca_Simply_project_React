import { Alert, AlertTitle, Dialog } from "@mui/material"

export const ErrorAlert = ({ message, onClose, ...props }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <Alert severity="error" role="button" onClose={onClose}>
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Dialog>
  )
}
