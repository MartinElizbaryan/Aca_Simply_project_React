import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    marginTop: "120px !important",
    marginBottom: "30px !important",
    // margin: "120px 50px 30px !important",
    color: "#7f848c",
  },
  button: {
    backgroundColor: `${colors.green} !important`,
  },
  info: {
    paddingBottom: 15,
  },
  header: {
    borderBottom: "1px solid gray",
    display: "table",
    paddingBottom: "10px",
    marginBottom: "50px !important",
  },
})

export default useStyles
