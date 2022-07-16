import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    position: "sticky",
    paddingBottom: "2px",
  },
  languagesSelect: {
    "&>div": {
      width: "20px",
      padding: "7px 25px 5px 10px !important",
    },
    "&>svg": {
      right: 0,
    },
  },
  languagesBox: {
    display: "flex",
    alignItems: "center",
    padding: "5px",
  },
})
export default useStyles
