import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  input: {
    color: "white !important",
    borderRadius: "5px",
    width: "100% !important",
    "& label": {
      fontSize: 14,
      color: "#fff !important",
    },
  },
})
export default useStyles
