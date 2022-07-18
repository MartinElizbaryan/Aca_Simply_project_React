import { createTheme } from "@mui/material/styles"

export default createTheme({
  palette: {
    mode: "dark",
    blurBlue: {
      main: "rgba(50,50,50,1)",
      blur: "rgba(30,30,30,0.8)",
    },
    body: "#000",
    blueButton: {
      main: "#000",
      hover: "#505050",
      textColor: "#fff",
    },
    greenButton: {
      main: "#747474",
      hover: "#505050",
      textColor: "#fff",
    },
    mainColor: "#fff",
    greyBg: "#212121",
    notificationHover: "#565656",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "none",
    button: {
      textTransform: "none",
    },
  },
})
