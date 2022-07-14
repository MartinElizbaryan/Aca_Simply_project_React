import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  button: {
    color: colors.white,
    padding: "12px 14px !important",
    fontSize: "0.875rem !important",
    justifyContent: "space-between !important",
    textTransform: "none !important",
  },
})
export default useStyles
