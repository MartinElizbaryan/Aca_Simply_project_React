import { IconButton, Typography } from "@mui/material"
// import useStyles from "./styles"

export const TransparentButton = ({ icon, title, ...props }) => {
  // const classes = useStyles()

  return (
    <IconButton
      size="large"
      color="inherit"
      sx={{
        borderRadius: 1.5,
      }}
      {...props}
    >
      {icon}
      {title && <Typography ml={2}>{title}</Typography>}
    </IconButton>
  )
}
