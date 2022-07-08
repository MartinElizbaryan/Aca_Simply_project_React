import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  totalBox: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 12,
  },
  central: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // height: 95,
    // ["@media (min-width:630px)"]: {
    //   height: 87,
    // },
  },
  finalBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 15,
    marginBottom: 20,
  },
  central2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
})
export default useStyles
