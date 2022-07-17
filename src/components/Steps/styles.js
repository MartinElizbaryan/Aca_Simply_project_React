import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  bigText: {
    fontSize: [[30], "!important"],
    color: "#222222",
    textAlign: "center",
    fontWeight: [[600], "!important"],
    marginBottom: [[40], "!important"],
  },
  circle: {
    borderRadius: "50%",
    width: 120,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bigText2: {
    fontSize: [[20], "!important"],
    color: "#222222",
    textAlign: "center",
    fontWeight: [[600], "!important"],
    margin: [[5], "!important"],
    marginBottom: [[20], "!important"],
  },
  lightGreyText: {
    color: "#777777",
    fontSize: 14,
    textAlign: "center",
  },
  gridStyle: {
    padding: "10px !important",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "0px 5px 25px 0px rgb(204 204 204 / 55%)",
      cursor: "pointer",
      transition: "all ease 0.5s 0s",
    },
  },
})
export default useStyles
