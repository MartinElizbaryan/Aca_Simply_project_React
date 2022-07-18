import { textTransform } from "@mui/system"
import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    marginTop: "100px !important",
    marginBottom: "30px !important",
    color: colors.fontColor,
  },
  number: {
    position: "relative",
    textAlign: "center",
    fontSize: "150px !important",
    fontWeight: "800 !important",
    color: "gray",
  },
  miniText: {
    textAlign: "center",
    fontSize: "20px !important",
    color: "gray",
    fontWeight: "200 !important",
  },
})

export default useStyles
