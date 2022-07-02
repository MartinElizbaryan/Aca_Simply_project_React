import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  flexible: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.grey,
    flex: 1,
    paddingTop: 10,
    height: "100%",
  },
  text1: {
    textAlign: "center",
    color: "#0e141e",
    marginBottom: [[10], "!important"],
  },
  bgColor: {
    backgroundColor: colors.grey,
  },
  totalBox: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 12,
    ["@media (min-width:780px)"]: {
      // eslint-disable-line no-useless-computed-key
    },
  },
  spacing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: 50,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  central: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 266,
    ["@media (min-width:680px)"]: {
      height: 233,
    },
    // ["@media (min-width:580px)"]: {
    //   height: 300,
    // },
  },
  finalBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  central2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  policyText: {
    marginTop: [[20], "!important"],
  },
})
export default useStyles
