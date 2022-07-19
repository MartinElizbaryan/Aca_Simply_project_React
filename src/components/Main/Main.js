import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { useTheme } from "@mui/material"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Loading from "../Shared/Loading/Loading"
import { ScrollTopButton } from "../Shared/Buttons/ScrollTopButton/ScrollTopButton"
import { scrollToTop } from "../../helpers/utils"
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

      {isLoading && <Loading />}

      {visible && <ScrollTopButton onClick={scrollToTop} />}
    </>
  )
}

export default Main
