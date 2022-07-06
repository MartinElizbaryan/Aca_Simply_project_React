import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  header: {
    borderBottom: "1px solid gray",
    display: "table",
    paddingBottom: "10px",
    marginBottom: "50px !important",
  },
  container: {
    marginTop: "73px !important",
    padding: "0px !important",
    color: colors.fontColor,
    height: "100% !important",
  },
  sidebar: {
    boxShadow: "4px 4px 20px rgb(0 0 0 / 20%)",
    width: "100%",
    position: "sticky",
    maxWidth: 300,
    backgroundColor: "white",
    // overflowY: "auto",
    // scrollbarWidth: 0,
    // "&::-webkit-scrollbar": {
    //   display: "none",
    // },
  },
})

export default useStyles
