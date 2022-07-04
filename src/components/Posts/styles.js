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
    marginTop: "100px !important",
    marginBottom: "30px !important",
    color: colors.fontColor,
  },
})

export default useStyles
