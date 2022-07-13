import { lazy, Suspense, useEffect, useState } from "react"
import i18n from "i18next"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {
  AdminPrivateRoute,
  AuthorizedUserPrivateRoute,
  UnauthorizedUserPrivateRoute,
} from "./routes/PrivateRoutes"
import Main from "./components/Main/Main"
import Home from "./components/Home/Home"
import MyPosts from "./components/MyPosts/MyPosts"
import MyPostsEdit from "./components/MyPostsEdit/MyPostsEdit"
import ConfirmedPosts from "./components/ConfirmedPosts/ConfirmedPosts"
import FavoritePosts from "./components/FavoritePosts/FavoritePosts"
import PageNotFound from "./components/Errors/PageNotFound/PageNotFound"
import Profile from "./components/Profile/Profile"
import PostSingle from "./components/PostSingle/PostSingle"
import Posts from "./components/Posts/Posts"
import RegistrationLogin from "./components/RegistrationLogin/RegistrationLogin"
import ChangePassword from "./components/ChangePassword/ChangePassword"
import PendingPosts from "./components/PendingPosts/PendingPosts"
import FAQ from "./components/FAQ/FAQ"
import AdminFAQ from "./components/AdminFAQ/AdminFAQ"
import AdminFAQCreate from "./components/AdminFAQCreate/AdminFAQCreate"
import AdminFAQEdit from "./components/AdminFAQEdit/AdminFAQEdit"
import Contact from "./components/Contact/Contact"
import AboutUs from "./components/AboutUs/AboutUs"
import Privacy from "./components/Privacy/Privacy"
import Account from "./components/Account/Account"
import Terms from "./components/Terms/Terms"
import api from "./api/api"
import history from "./helpers/history"
import connectToSocket from "./helpers/connectToSocket"
import { deleteUserInfo, setUserInfo } from "./redux/userSlice"
import "./App.css"

const Chat = lazy(() => import("./components/Chat/Chat"))

function App() {
  const [loading, setLoading] = useState(true)
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
    <>
      <Suspense fallback="Loading...">
        <Router history={history}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route exact path="/posts" element={<Posts />} />
              <Route exact path="/posts/:id" element={<PostSingle />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/faq" element={<FAQ />} />
              <Route exact path="/privacy" element={<Privacy />} />
              <Route exact path="/terms-conditions" element={<Terms />} />
              <Route path="*" element={<PageNotFound />} />

              <Route path="/" element={<UnauthorizedUserPrivateRoute />}>
                <Route exact path="/signin" element={<RegistrationLogin />} />
                <Route exact path="/signup" element={<RegistrationLogin />} />
                <Route exact path="/forgot-password" element={<RegistrationLogin />} />
              </Route>

              <Route path="/" element={<AuthorizedUserPrivateRoute />}>
                <Route
                  exact
                  path="/chat"
                  element={
                    <Suspense fallback={<div>Loading</div>}>
                      <Chat />
                    </Suspense>
                  }
                />
                <Route
                  exact
                  path="/chat/:id"
                  element={
                    <Suspense fallback={<div>Loading</div>}>
                      <Chat />
                    </Suspense>
                  }
                />
                <Route path="/" element={<Account />}>
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/profile/my-posts" element={<MyPosts />} />
                  <Route exact path="/profile/my-posts/:id" element={<MyPostsEdit />} />
                  <Route exact path="/profile/confirmed-posts" element={<ConfirmedPosts />} />
                  <Route exact path="/profile/favorite-posts" element={<FavoritePosts />} />
                  <Route exact path="/profile/change-password" element={<ChangePassword />} />
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
        </Router>
      </Suspense>
    </>
  )
}

export default App
