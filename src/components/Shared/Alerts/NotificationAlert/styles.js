import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  button: {
    alignItems: "center",
    cursor: "pointer",
    margin: "8px !important",
  },
  new: {
    "&:hover": {
      backgroundColor: "#d9ebee",
    },
  },
  seen: {
    backgroundColor: "#f5f5f5 !important",
    "&:hover": {
      backgroundColor: "#f0f0f0 !important",
    },
  },
})
export default useStyles
