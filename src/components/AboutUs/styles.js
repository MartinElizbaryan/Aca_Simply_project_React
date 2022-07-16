import { textTransform } from "@mui/system"
import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  container: {
    marginTop: "100px !important",
    marginBottom: "30px !important",
    color: colors.fontColor,
  },
  header: {
    borderBottom: "1px solid gray",
    display: "table",
    paddingBottom: "10px",
    marginBottom: "50px !important",
  },
  bigText: {
    fontSize: "36px !important",
  },
  miniText: {
    fontSize: "16px !important",
    marginBottom: "10px !important",
  },
  contant: {
    fontSize: "18px !important",
    marginBottom: "10px !important",
    fontWeight: "bold !important",
  },
  profile: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  box2: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  miniText2: {
    fontSize: "16px !important",
    marginBottom: "10px !important",
    fontStyle: "italic !important",
  },
})

export default useStyles
