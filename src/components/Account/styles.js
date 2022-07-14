import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    marginTop: "73px !important",
    padding: "0px !important",
    color: colors.fontColor,
    height: "100% !important",
  },
  sidebar: {
    boxShadow: "4px 4px 20px rgb(0 0 0 / 20%)",
    position: "fixed",
    width: 250,
    backgroundColor: "white",
    height: "100%",
  },
})

export default useStyles
