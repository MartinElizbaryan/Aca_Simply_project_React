import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ScrollTopButton } from "../Shared/Buttons/ScrollTopButton/ScrollTopButton"
import { scrollToTop } from "../../helpers/utils"

export default function Main({ component: Component, ...rest }) {
  const [visible, setVisible] = useState(false)

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
      <main>
        <Outlet />
      </main>
      <Footer />
      {visible && <ScrollTopButton onClick={scrollToTop} />}
    </>
  )
}
