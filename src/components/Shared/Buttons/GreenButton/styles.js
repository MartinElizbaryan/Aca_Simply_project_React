import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  button: {
    backgroundColor: `${colors.green} !important`,
    color: colors.white,
    padding: "12px 14px !important",
    fontSize: "14px !important",
    justifyContent: "space-between !important",
    "&:hover": {
      backgroundColor: `${colors.hoveredGreen} !important`,
    },
  },
})
export default useStyles
