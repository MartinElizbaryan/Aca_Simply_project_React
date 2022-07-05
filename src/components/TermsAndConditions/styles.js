import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  flexible: {
    marginTop: [[90], "!important"],
    margin: 20,
  },
  bigText: {
    fontSize: [[22], "!important"],
    fontWeight: [["700"], "!important"],
    marginTop: [[20], "!important"],
  },
  header: {
    borderBottom: "1px solid gray",
    display: "table",
    paddingBottom: "10px",
    marginBottom: "50px !important",
  },
})
export default useStyles
