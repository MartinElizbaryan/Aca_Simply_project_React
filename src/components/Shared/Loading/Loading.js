import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "44px",
        height: "44px",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
      }}
    >
      <CircularProgress />
    </Box>
  )
}
