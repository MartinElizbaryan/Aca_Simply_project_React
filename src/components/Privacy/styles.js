import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  flexible: {
    marginTop: [[90], "!important"],
  },
  bigText: {
    fontSize: [[22], "!important"],
    fontWeight: [["700"], "!important"],
    marginTop: [[20], "!important"],
  },
})
export default useStyles
