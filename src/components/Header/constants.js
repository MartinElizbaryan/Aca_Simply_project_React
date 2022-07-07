import { useTranslation } from "react-i18next"

//const { t } = useTranslation()
export const navlist = [
  { name: "Home", route: "/" },
  { name: "Lost", route: "/posts?type=LOST" },
  { name: "Found", route: "/posts?type=FOUND" },
  { name: "Contact", route: "/contact" },
]
