import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles.js"

const useStyles = createUseStyles({
  logo: {
    maxWidth: "120px",
  },
  appBar: {
    backgroundColor: colors.blueBlur + "!important",
    backdropFilter: "saturate(180%) blur(5px)",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
})
export default useStyles
