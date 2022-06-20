import React from "react";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { colors } from "../../constants/styles";
import useStyles from "./style.js";
export default function Message({ type, message, time }) {
  const classes = useStyles();


  const styleType =
    type === "from"
      ? {
          listItemStyle: classes.from,
          bgColor: colors.blue,
          textAlign: classes.textRight
        }
      : {
          listItemStyle: "",
          bgColor: colors.green,
          textAlign: ""
        };

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
            lg: "35%"
          },
          color: colors.white,
          padding: 2
        }}
      >
        <Grid item xs={12}>
          <ListItemText
            className={styleType.textAlign}
            // primary={`User ${message.from.name} ${message.text}`}
            primary={message}
          ></ListItemText>
        </Grid>
        <Grid item xs={12}>
          <ListItemText
            className={styleType.textAlign}
            secondary={time}
          ></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  );
}
