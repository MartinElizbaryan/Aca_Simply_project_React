import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  button: {
    color: colors.white,
    padding: "12px 14px !important",
    fontSize: "14px !important",
    textTransform: "none !important",
    justifyContent: "space-between !important",
  },
})
export default useStyles
