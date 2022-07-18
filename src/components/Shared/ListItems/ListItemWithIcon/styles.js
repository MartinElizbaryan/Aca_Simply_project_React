import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  link: {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
    textDecoration: "none",
  },
  clicked: {
    backgroundColor: `${colors.clickedGrey} !important`,
    "& span": {
      color: `${colors.blue} !important`,
    },
  },
})
export default useStyles
