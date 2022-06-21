import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  input: {
    "& label": {
      fontSize: 14,
    },
  },
  button: {
    justifyContent: "center !important",
  },
})
export default useStyles
