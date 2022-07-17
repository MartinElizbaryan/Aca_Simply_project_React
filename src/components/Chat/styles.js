import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    height: "calc(100% - 72px)",
  },
  chatSection: {
    width: "100%",
    height: "100%",
  },
  borderRight: {
    borderRight: "1px solid #e0e0e0",
  },
  borderBottom: {
    width: "100%",
    borderBottom: "1px solid #e0e0e0",
    flexDirection: "column !important",
    justifyContent: "center",
    height: 60,
  },
})
export default useStyles
