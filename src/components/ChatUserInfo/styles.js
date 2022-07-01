import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  clickedBlock: {
    backgroundColor: `${colors.clickedGrey} !important`,
  },
})

export default useStyles
