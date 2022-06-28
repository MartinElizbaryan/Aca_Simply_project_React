import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  button: {
    backgroundColor: `${colors.green} !important`,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export default useStyles
