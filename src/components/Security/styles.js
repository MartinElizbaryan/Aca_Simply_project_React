import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  form: {
    textAlign: "center",
  },
  listButton: {
    minHeight: 56,
  },
  label: {
    textAlign: "start",
    paddingRight: 25,
    "& span": {
      fontWeight: "bold !important",
    },
  },
})

export default useStyles
