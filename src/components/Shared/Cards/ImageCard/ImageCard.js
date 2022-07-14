import { CardMedia, Grid, IconButton } from "@mui/material"
import CancelIcon from "@mui/icons-material/Cancel"
import useStyles from "./styles"

export function ImageCard({ image, index, removeImage, ...props }) {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={4} className={classes.wrapper}>
      <CardMedia component="img" height="200" image={image} alt="image" className={classes.card} />
      <IconButton
        size="medium"
        onClick={() => {
          removeImage(index)
        }}
        className={classes.icon}
      >
        <CancelIcon color="action" />
      </IconButton>
    </Grid>
  )
}
