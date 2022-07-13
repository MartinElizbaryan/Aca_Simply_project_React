import { createUseStyles } from "react-jss"
import bgImage from "../../assets/darkerBackground.jpg"

const useStyles = createUseStyles({
  homeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: 2,
  },
  BgImage: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
})
export default useStyles
