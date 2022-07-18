import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  clickedBlock: {
    backgroundColor: `${colors.clickedGrey} !important`,
    "& span": {
      color: "#000 !important",
    },
  },
  badge: {
    "& .MuiBadge-badge": {
      right: 2,
      top: 5,
      padding: "0 4px",
    },
  },
})

export default useStyles
