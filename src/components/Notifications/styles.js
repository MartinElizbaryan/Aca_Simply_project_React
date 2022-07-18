import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  markBox: {
    display: "flex",
    justifyContent: "end",
    padding: 5,
  },
  markButton: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "5px 5px 0 0",
    "&:hover": {
      color: "rgb(184, 231, 251)",
    },
  },
})

export default useStyles
