import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  box: {
    padding: "5px 10px",
    maxWidth: "70%",
    borderRadius: 25,
    cursor: "default",
    color: colors.fontColor,
    backgroundColor: "rgb(204 204 204)",
  },
  text: {
    wordBreak: "break-word",
    margin: "2px 8px 2px 8px",
  },
  from: {
    justifyContent: "flex-end !important",
    textAlign: "end !important",
    "& div": {
      backgroundColor: "#1976D2",
      color: "white",
      "& p": {
        color: colors.lightGrey,
      },
    },
  },
})
export default useStyles
