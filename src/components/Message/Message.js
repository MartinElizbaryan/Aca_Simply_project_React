import React, { memo } from "react"
import moment from "moment"
import { Grid, ListItem, ListItemText, Tooltip } from "@mui/material"
import useStyles from "./styles"
import { useTranslation } from "react-i18next"

export function Message({ type, message, isSeen, createdAt }) {
  const classes = useStyles()
  const { t } = useTranslation()
  const timeFromNow = moment(createdAt).fromNow()
  const date = moment(createdAt).format("LLLL")

  return (
    <ListItem className={classes[type]}>
      <Tooltip title={date} placement="bottom" enterTouchDelay={0} arrow>
        <Grid className={classes.box}>
          <ListItemText
            primaryTypographyProps={{ fontSize: "0.8125rem" }}
            secondaryTypographyProps={{ fontSize: "0.6rem" }}
            primary={message}
            secondary={isSeen ? t("seen") : t("sent")}
            className={classes.text}
          />
        </Grid>
      </Tooltip>
    </ListItem>
  )
}

export default memo(Message)
