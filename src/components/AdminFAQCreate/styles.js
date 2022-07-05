import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    paddingTop: "100px !important",
    paddingBottom: "30px !important",
    color: colors.fontColor,
  },
  header: {
    borderBottom: "1px solid gray",
    display: "table",
    paddingBottom: "10px",
    marginBottom: "50px !important",
  },
})

export default useStyles
