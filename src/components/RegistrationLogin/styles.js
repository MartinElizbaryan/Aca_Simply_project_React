import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  flexible: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.grey,
    flex: 1,
    paddingTop: 10,
    height: "100%",
    marginTop: 80,
  },
  text1: {
    textAlign: "center",
    color: "#0e141e",
    marginBottom: [[10], "!important"],
  },
  totalBox: {
    backgroundColor: colors.white,
    boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)",
    borderRadius: 10,
    ["@media (min-width:600px)"]: {
      width: 400,
    },
  },
  otherBoxes: {
    margin: "0px 16px",
  },
  spacing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  linkBox: {
    width: "50%",
    color: [["black"], "!important"],
  },
  borderRadius1: {
    borderTopLeftRadius: 10,
  },
  borderRadius2: {
    borderTopRightRadius: 10,
  },
  policyText: {
    marginTop: [[20], "!important"],
    marginBottom: [[20], "!important"],
    fontSize: "0.7rem !important",
    textAlign: "center",
  },
})
export default useStyles
