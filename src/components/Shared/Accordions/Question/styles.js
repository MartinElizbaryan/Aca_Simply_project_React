import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center !important",
  },
  icon: {
    paddingRight: 15,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flexEnd: {
    display: "flex",
    alignItems: "flex-end",
  },
  content2: {
    display: "flex",
    justifyContent: "space-between",
  },
})
export default useStyles
