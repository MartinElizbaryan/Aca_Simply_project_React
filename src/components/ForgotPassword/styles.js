import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  text1: {
    textAlign: "center",
    color: "#0e141e",
    marginBottom: [[10], "!important"],
  },
  totalBox: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 12,
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
    justifyContent: "center",
  },
  central: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 15,
  },
  central2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexDirection: "column",
  },
  margin: {
    margin: 10,
  },
  central3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  central4: {
    marginTop: 20,
  },
  bigText: {
    fontSize: [[22], "!important"],
    fontWeight: [["700"], "!important"],
    marginTop: [[20], "!important"],
  },
})
export default useStyles
