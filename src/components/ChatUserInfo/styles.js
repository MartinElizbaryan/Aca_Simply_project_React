import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  clickedBlock: {
    backgroundColor: colors.clickedGrey,
  },
  block: {
    backgroundColor: "white !important",

    "&:hover": {
      backgroundColor: `${colors.hoveredGrey} !important`,
    },
  },
  avatar: {
    backgroundColor: `${colors.blue} !important`,
    fontSize: "1rem !important",
    boxShadow: "0 3px 10px rgb(0 0 0 / 20%) !important",
  },
})

export default useStyles
