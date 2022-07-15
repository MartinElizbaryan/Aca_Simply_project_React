import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  bigText: {
    fontSize: [[30], "!important"],
    color: "#222222",
    textAlign: "center",
    fontWeight: [[600], "!important"],
    textDecoration: "underline",
    marginBottom: [[40], "!important"],
  },
  circle: {
    borderRadius: "50%",
    backgroundColor: "#6d88a8",
    width: 120,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bigText2: {
    fontSize: [[20], "!important"],
    color: "#222222",
    textAlign: "center",
    fontWeight: [[600], "!important"],
    margin: [[5], "!important"],
    marginBottom: [[20], "!important"],
  },
  lightGreyText: {
    color: "#777777",
    fontSize: 14,
    textAlign: "center",
  },
})
export default useStyles
