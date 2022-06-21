import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  logo: {
    width: 120,
    "& a": {
      display: "block",
      "& img": {
        maxWidth: 120,
      },
    },
  },
})
export default useStyles
