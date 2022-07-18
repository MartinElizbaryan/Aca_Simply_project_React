import { useTranslation } from "react-i18next"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"

export const PostPopup = ({ open, children, title, handleClose, handleSubmit }) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{title}</Typography>
          <IconButton size="medium" onClick={handleClose} sx={{ marginLeft: 2 }}>
            <CloseIcon color="action" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent dividers={true}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t("Cancel")}</Button>
        <Button onClick={handleSubmit}>{t("Ok")}</Button>
      </DialogActions>
    </Dialog>
  )
}
