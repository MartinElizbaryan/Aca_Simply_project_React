import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  header: {
    borderBottom: "1px solid gray",
    display: "table",
    paddingBottom: "10px",
    marginBottom: "50px !important",
  },
  container: {
    marginTop: "73px !important",
    padding: "0px !important",
    color: colors.fontColor,
    height: "100% !important",
  },
})

export default useStyles
