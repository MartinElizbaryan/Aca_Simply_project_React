import { Outlet } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ScrollTopButton } from "../Shared/Buttons/ScrollTopButton/ScrollTopButton"
import { scrollToTop } from "../../helpers/utils"
import { Backdrop, useTheme } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import { useSelector } from "react-redux"
import { getIsLoading } from "../../redux/loading/loadingSelectors"

const Main = ({ component: Component, ...rest }) => {
  const [visible, setVisible] = useState(false)
  const main = useRef(null)
  const theme = useTheme()
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.innerWidth > 600) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return (
    <>
      <Header />
      <main
        ref={main}
        style={{
          backgroundColor: theme.palette.body,
        }}
      >
        <Outlet />
      </main>
      <Footer />

      {isLoading && (
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {visible && <ScrollTopButton onClick={scrollToTop} />}
    </>
  )
}

export default Main
