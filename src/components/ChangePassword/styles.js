import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  button: {
    backgroundColor: `${colors.green} !important`,
  },
  label: {
    textAlign: "end",
    paddingRight: 25,
  },
})

export default useStyles
