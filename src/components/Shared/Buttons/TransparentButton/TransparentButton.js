import { IconButton } from "@mui/material"
// import useStyles from "./styles"

export const TransparentButton = ({ children, ...props }) => {
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
      {children}
    </IconButton>
  )
}
