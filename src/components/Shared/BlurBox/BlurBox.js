import { Box, Typography } from "@mui/material"

export default function BlurBox({ children }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        // width: "100%",
        // height: "100%",
        // backgroundColor: "rgba(0, 0, 0,0.1)",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography variant="h4" fontWeight="bold" sx={{ color: "#262626" }}>
        {children}
      </Typography>
    </Box>
  )
}
