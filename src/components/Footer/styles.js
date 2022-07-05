import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    position: "sticky",
    backgroundColor: colors.blue,
    paddingBottom: "2px",
  },
})
export default useStyles
