import { lazy, Suspense, useEffect, useState } from "react"
import i18n from "./i18n/languages/translations/translations.js"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
import "./App.css"

const Main = lazy(() => import("./components/Main/Main"))
const Chat = lazy(() => import("./components/Chat/Chat"))
const Home = lazy(() => import("./components/Home/Home"))
const MyPosts = lazy(() => import("./components/MyPosts/MyPosts"))
const MyPostsEdit = lazy(() => import("./components/MyPostsEdit/MyPostsEdit"))
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
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { getThemeMode } from "./redux/themeSelectors"
import { setThemeMode } from "./redux/themeSlice"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    blurBlue: {
      main: "rgba(0,0,0,1)",
      blur: "rgba(0,0,0,0.8)",
    },
    body: "#000",
    blueButton: {
      main: "#000",
      hover: "#505050",
    },
    greenButton: {
      main: "#000",
      hover: "#505050",
    },
  },
})
const lightTheme = createTheme({
  palette: {
    mode: "light",
    blurBlue: {
      main: "rgba(55,105,150,1)",
      blur: "rgba(55,105,150,0.8)",
    },
    body: "#fff",
    blueButton: {
      main: "#376996",
      hover: "#5fb2fc",
    },
    greenButton: {
      main: "#1f8d42",
      hover: "#177234",
    },
  },
})

function App() {
  localStorage.getItem("theme") === null ? localStorage.setItem("theme", "light") : null
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
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/posts"
                element={
                  <Suspense fallback={<Loading />}>
                    <Posts />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/posts/:id"
                element={
                  <Suspense fallback={<Loading />}>
                    <PostSingle />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/contact"
                element={
                  <Suspense fallback={<Loading />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/about"
                element={
                  <Suspense fallback={<Loading />}>
                    <AboutUs />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/faq"
                element={
                  <Suspense fallback={<Loading />}>
                    <FAQ />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/privacy"
                element={
                  <Suspense fallback={<Loading />}>
                    <Privacy />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/terms"
                element={
                  <Suspense fallback={<Loading />}>
                    <Terms />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loading />}>
                    <PageNotFound />
                  </Suspense>
                }
              />

              <Route path="/" element={<UnauthorizedUserPrivateRoute />}>
                <Route
                  exact
                  path="/signin"
                  element={
                    <Suspense fallback={<Loading />}>
                      <RegistrationLogin />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/signup"
                  element={
                    <Suspense fallback={<Loading />}>
                      <RegistrationLogin />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/forgot-password"
                  element={
                    <Suspense fallback={<Loading />}>
                      <RegistrationLogin />
                    </Suspense>
                  }
                />
              </Route>

              <Route path="/" element={<AuthorizedUserPrivateRoute />}>
                <Route
                  exact
                  path="/chat"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Chat />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/chat/:id"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Chat />
                    </Suspense>
                  }
                />
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Account />
                    </Suspense>
                  }
                >
                  <Route
                    exact
                    path="/profile"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Profile />
                      </Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/profile/my-posts"
                    element={
                      <Suspense fallback={<Loading />}>
                        <MyPosts />
                      </Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/profile/my-posts/:id"
                    element={
                      <Suspense fallback={<Loading />}>
                        <MyPostsEdit />
                      </Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/profile/confirmed-posts"
                    element={
                      <Suspense fallback={<Loading />}>
                        <ConfirmedPosts />
                      </Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/profile/favorites"
                    element={
                      <Suspense fallback={<Loading />}>
                        <FavoritePosts />
                      </Suspense>
                    }
                  />
                  <Route
                    exact
                    path="/profile/security"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Security />
                      </Suspense>
                    }
                  />
                  <Route path="/" element={<AdminPrivateRoute />}>
                    <Route
                      exact
                      path="/profile/pending-posts"
                      element={
                        <Suspense fallback={<Loading />}>
                          <PendingPosts />
                        </Suspense>
                      }
                    />
                    <Route
                      exact
                      path="/profile/faq"
                      element={
                        <Suspense fallback={<Loading />}>
                          <AdminFAQ />
                        </Suspense>
                      }
                    />
                    <Route
                      exact
                      path="/profile/faq/create"
                      element={
                        <Suspense fallback={<Loading />}>
                          <AdminFAQCreate />
                        </Suspense>
                      }
                    />
                    <Route
                      exact
                      path="/profile/faq/:id"
                      element={
                        <Suspense fallback={<Loading />}>
                          <AdminFAQEdit />
                        </Suspense>
                      }
                    />
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
