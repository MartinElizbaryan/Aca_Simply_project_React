import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  form: {
    textAlign: "center",
  },
  button: {
    backgroundColor: `${colors.green} !important`,
  },
  label: {
    textAlign: "end",
    paddingRight: 25,
    "& span": {
      fontWeight: "bold !important",
    },
  },
})

export default useStyles
