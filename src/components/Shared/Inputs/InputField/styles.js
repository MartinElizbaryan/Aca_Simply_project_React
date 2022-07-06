import { createUseStyles } from "react-jss"
import { colors } from "../../../../constants/styles"

const useStyles = createUseStyles({
  inputStyle: {
    backgroundColor: colors.lightGrey,
    height: 40,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    "&>div": {
      padding: "6px 0 !important",
    },
  },
})
export default useStyles
