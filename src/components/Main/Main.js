import { Outlet } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ScrollTopButton } from "../Shared/Buttons/ScrollTopButton/ScrollTopButton"
import { scrollToTop } from "../../helpers/utils"
import { useTheme } from "@mui/material"

export default function Main({ component: Component, ...rest }) {
  const [visible, setVisible] = useState(false)
  const main = useRef(null)
  const theme = useTheme()
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.innerWidth > 300) {
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
      {visible && <ScrollTopButton onClick={scrollToTop} />}
    </>
  )
}
