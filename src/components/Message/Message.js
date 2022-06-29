import React from "react"
import moment from "moment"
import { Grid, ListItem, ListItemText } from "@mui/material"
import { colors } from "../../constants/styles"
import useStyles from "./styles"

export default function Message({ type, message, date }) {
  const classes = useStyles()
  const time = moment(date).fromNow()
  const styleType =
    type === "from"
      ? {
          listItemStyle: classes.from,
          bgColor: colors.blue,
          textAlign: classes.textRight,
        }
      : {
          listItemStyle: "",
          bgColor: colors.green,
          textAlign: "",
        }

  return (
    <ListItem className={styleType.listItemStyle}>
      <Grid
        container
        sx={{
          backgroundColor: styleType.bgColor,
          borderRadius: "15px",
          width: {
            xs: "75%",
            md: "50%",
            lg: "35%",
          },
          color: colors.white,
          padding: 2,
        }}
      >
        <Grid item xs={12}>
          <ListItemText className={styleType.textAlign} primary={message}></ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText className={styleType.textAlign} secondary={time}></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  )
}
