import { Alert, AlertTitle, Dialog } from "@mui/material"

export const SuccessAlert = ({ message, onClose, ...props }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <Alert severity="success" role="button" onClose={onClose}>
        <AlertTitle>Success</AlertTitle>
        {message}
      </Alert>
    </Dialog>
  )
}
