import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  button: {
    padding: "10px 0 10px 20px !important",
    color: `${colors.darkGrey} !important`,
    fontSize: "1.3rem",
    "&:hover": {
      color: `${colors.messageBlue} !important`,
    },
  },
})
export default useStyles
