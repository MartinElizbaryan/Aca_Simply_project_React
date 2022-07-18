import { createTheme } from "@mui/material/styles"

export default createTheme({
  palette: {
    mode: "light",
    blurBlue: {
      main: "rgba(55,105,150,1)",
      blur: "rgba(55,105,150,0.8)",
    },
    body: "#f8f8f8",
    blueButton: {
      main: "#376996",
      hover: "#5fb2fc",
    },
    greenButton: {
      main: "#1f8d42",
      hover: "#177234",
    },
    mainColor: "#000",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    textTransform: "none",

    button: {
      textTransform: "none",
    },
  },
})
