import { lazy, Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import {
  AdminPrivateRoute,
  AuthorizedUserPrivateRoute,
  UnauthorizedUserPrivateRoute,
} from "./routes/PrivateRoutes"
import Main from "./components/Main/Main"
import Loading from "./components/Shared/Loading/Loading"
import api from "./api/api"
import history from "./helpers/history"
import connectToSocket from "./helpers/connectToSocket"
import { deleteUserInfo, setUserInfo } from "./redux/user/userSlice"
import { getThemeMode } from "./redux/theme/themeSelectors"
import i18n from "./i18n/languages/translations/translations.js"
import darkTheme from "./themes/darkTheme"
import lightTheme from "./themes/lightTheme"
import "./App.css"

const Chat = lazy(() => import("./components/Chat/Chat"))
const Home = lazy(() => import("./components/Home/Home"))
const MyPosts = lazy(() => import("./components/MyPosts/MyPosts"))
const ConfirmedPosts = lazy(() => import("./components/ConfirmedPosts/ConfirmedPosts"))
const FavoritePosts = lazy(() => import("./components/FavoritePosts/FavoritePosts"))
const PageNotFound = lazy(() => import("./components/PageNotFound/PageNotFound"))
const Profile = lazy(() => import("./components/Profile/Profile"))
const PostDetailed = lazy(() => import("./components/PostDetailed/PostDetailed"))
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
  const themeMode = useSelector(getThemeMode)
  const dispatch = useDispatch()
  useEffect(() => {
    const language = localStorage.getItem("language")
    i18n.changeLanguage(language)

    const getMe = async () => {
      try {
        const res = await api.get("/users/me")
        if (!res) return
        const user = res.data.user
        dispatch(setUserInfo(user))
        connectToSocket(user.id)
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
                    path="/posts/:id"
                    element={
                      <Suspense fallback={<Loading />}>
                        <PostDetailed />
                      </Suspense>
                    }
                  />
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
