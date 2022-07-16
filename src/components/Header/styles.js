import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles.js"

const useStyles = createUseStyles({
  appBar: {
    height: 71,
    justifyContent: "center",
    backdropFilter: "saturate(180%) blur(5px)",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
})
export default useStyles
