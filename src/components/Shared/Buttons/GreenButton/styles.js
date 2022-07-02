import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  button: {
    // backgroundColor: `${colors.darkGreen} !important`,
    color: colors.white,
    padding: "12px 14px !important",
    fontSize: "0.875rem !important",
    justifyContent: "space-between !important",
    // "&:hover": {
    //   backgroundColor: `${colors.hoveredDarkGreen} !important`,
    // },
  },
})
export default useStyles
