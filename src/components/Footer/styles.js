import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    position: "sticky",
    paddingBottom: "2px",
  },
  languagesSelect: {
    "&>div": {
      width: "20px",
      padding: "7px 25px 5px 10px !important",
    },
    "&>svg": {
      right: 0,
    },
  },
  inputsBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    padding: "5px",
  },
})
export default useStyles
