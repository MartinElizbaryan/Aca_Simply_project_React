import { createUseStyles } from "react-jss"
import { colors } from "../../constants/styles"

const useStyles = createUseStyles({
  text1: {
    textAlign: "center",
    color: "#0e141e",
    marginBottom: [[10], "!important"],
  },
  totalBox: {
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 12,
    ["@media (max-width:600px)"]: {
      width: 300,
    },
  },
  central: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-between",
  },
  central2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexDirection: "column",
  },
  margin: {
    margin: 10,
  },
  central3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  central4: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // height: 160,
    // ["@media (max-width:470px)"]: {
    //   height: 175,
    // },
    // ["@media (max-width:380px)"]: {
    //   height: 200,
    // },
    // ["@media (max-width:340px)"]: {
    //   height: 214,
    // },
  },
  central5: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // height: 200,
    // ["@media (max-width:470px)"]: {
    //   height: 175,
    // },
    // ["@media (max-width:380px)"]: {
    //   height: 200,
    // },
    // ["@media (max-width:340px)"]: {
    //   height: 214,
    // },
  },
  bigText: {
    fontSize: [[22], "!important"],
    fontWeight: [["700"], "!important"],
    marginTop: [[20], "!important"],
    textAlign: "center",
  },
})
export default useStyles
