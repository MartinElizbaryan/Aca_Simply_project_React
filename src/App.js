import { lazy, Suspense, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import {
  AdminPrivateRoute,
  AuthorizedUserPrivateRoute,
  UnauthorizedUserPrivateRoute,
} from "./routes/PrivateRoutes"
import Loading from "./components/Shared/Loading/Loading"
import api from "./api/api"
import history from "./helpers/history"
import connectToSocket from "./helpers/connectToSocket"
import { deleteUserInfo, setUserInfo } from "./redux/userSlice"
import { getThemeMode } from "./redux/themeSelectors"
import i18n from "./i18n/languages/translations/translations.js"
import darkTheme from "./themes/darkTheme"
import lightTheme from "./themes/lightTheme"
import "./App.css"
import Main from "./components/Main/Main"
// const Main = lazy(() => import("./components/Main/Main"))
const Chat = lazy(() => import("./components/Chat/Chat"))
const Home = lazy(() => import("./components/Home/Home"))
const MyPosts = lazy(() => import("./components/MyPosts/MyPosts"))
const ConfirmedPosts = lazy(() => import("./components/ConfirmedPosts/ConfirmedPosts"))
const FavoritePosts = lazy(() => import("./components/FavoritePosts/FavoritePosts"))
const PageNotFound = lazy(() => import("./components/Errors/PageNotFound/PageNotFound"))
const Profile = lazy(() => import("./components/Profile/Profile"))
const PostSingle = lazy(() => import("./components/PostSingle/PostSingle"))
const Posts = lazy(() => import("./components/Posts/Posts"))
const RegistrationLogin = lazy(() => import("./components/RegistrationLogin/RegistrationLogin"))
const Security = lazy(() => import("./components/Security/Security"))
const PendingPosts = lazy(() => import("./components/PendingPosts/PendingPosts"))
const FAQ = lazy(() => import("./components/FAQ/FAQ"))
const AdminFAQ = lazy(() => import("./components/AdminFAQ/AdminFAQ"))
const AdminFAQCreate = lazy(() => import("./components/AdminFAQCreate/AdminFAQCreate"))
const AdminFAQEdit = lazy(() => import("./components/AdminFAQEdit/AdminFAQEdit"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"))
const Privacy = lazy(() => import("./components/Privacy/Privacy"))
const Account = lazy(() => import("./components/Account/Account"))
const Terms = lazy(() => import("./components/Terms/Terms"))

function App() {
  const [loading, setLoading] = useState(true)
  const themeMode = useSelector(getThemeMode)
  const dispatch = useDispatch()
  useEffect(() => {
    const language = localStorage.getItem("language")
    i18n.changeLanguage(language)

    const getMe = async () => {
      try {
        const res = await api.get("/users/me")
        const user = res.data.user

        dispatch(setUserInfo(user))
        connectToSocket(user.id)

        setLoading(false)
      } catch (e) {
        console.log(e)
        dispatch(deleteUserInfo())
      }
    }
    getMe()
  }, [])
  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <Router history={history}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/posts/:id" element={<PostSingle />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/privacy" element={<Privacy />} />
              <Route exact path="/terms" element={<Terms />} />
              <Route path="*" element={<PageNotFound />} />

              <Route path="/" element={<UnauthorizedUserPrivateRoute />}>
                <Route exact path="/signin" element={<RegistrationLogin />} />
                <Route exact path="/signup" element={<RegistrationLogin />} />
                <Route exact path="/forgot-password" element={<RegistrationLogin />} />
              </Route>

              <Route path="/" element={<AuthorizedUserPrivateRoute />}>
                <Route exact path="/chat" element={<Chat />} />
                <Route exact path="/chat/:id" element={<Chat />} />
                <Route path="/" element={<Account />}>
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/profile/my-posts" element={<MyPosts />} />
                  <Route exact path="/profile/confirmed-posts" element={<ConfirmedPosts />} />
                  <Route exact path="/profile/favorites" element={<FavoritePosts />} />
                  <Route exact path="/profile/security" element={<Security />} />
                  <Route path="/" element={<AdminPrivateRoute />}>
                    <Route exact path="/profile/pending-posts" element={<PendingPosts />} />
                    <Route exact path="/profile/faq" element={<AdminFAQ />} />
                    <Route exact path="/profile/faq/create" element={<AdminFAQCreate />} />
                    <Route exact path="/profile/faq/:id" element={<AdminFAQEdit />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
