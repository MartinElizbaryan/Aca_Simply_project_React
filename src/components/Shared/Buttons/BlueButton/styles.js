import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  button: {
    backgroundColor: `${colors.blue} !important`,
    color: colors.white,
    padding: "12px 14px !important",
    fontSize: "14px !important",
    textTransform: "none !important",
    justifyContent: "space-between !important",
    "&:hover": {
      backgroundColor: `${colors.hoveredBlue} !important`,
    },
  },
})
export default useStyles
