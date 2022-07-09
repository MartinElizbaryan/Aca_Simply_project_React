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
    // height: 266,
    // ["@media (min-width:68a0px)"]: {
    //   height: 233,
    // },
  },
  central2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 15,
  },
})
export default useStyles
