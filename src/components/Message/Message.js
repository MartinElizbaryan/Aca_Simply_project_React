import React, { memo } from "react"
import moment from "moment"
import { Grid, ListItem, ListItemText, Tooltip } from "@mui/material"
import useStyles from "./styles"

export function Message({ type, message, isSeen, createdAt }) {
  const classes = useStyles()
  console.log(message)

  const timeFromNow = moment(createdAt).fromNow()
  const date = moment(createdAt).format("LLLL")

  return (
    <ListItem className={classes[type]}>
      <Tooltip title={date} placement={type === "from" ? "left" : "right"}>
        <Grid className={classes.box}>
          <ListItemText
            primaryTypographyProps={{ fontSize: "0.8125rem" }}
            secondaryTypographyProps={{ fontSize: "0.6rem" }}
            primary={message}
            secondary={(timeFromNow, isSeen ? "seen" : "sent")}
            className={classes.text}
          />
        </Grid>
      </Tooltip>
    </ListItem>
  )
}

export default memo(Message)
