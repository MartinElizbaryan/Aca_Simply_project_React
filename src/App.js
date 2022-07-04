import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Main from "./components/Main/Main"
import Home from "./components/Home/Home"
import MyPosts from "./components/MyPosts/MyPosts"
import MyPostsEdit from "./components/MyPostsEdit/MyPostsEdit"
import ConfirmedPosts from "./components/ConfirmedPosts/ConfirmedPosts"
import FavoritePosts from "./components/FavoritePosts/FavoritePosts"
import PageNotFound from "./components/Errors/PageNotFound/PageNotFound"
import Profile from "./components/Profile/Profile"
import CreatePost from "./components/CreatePosts/CreatePost"
import Chat from "./components/Chat/Chat"
import PostSingle from "./components/PostSingle/PostSingle"
import Posts from "./components/Posts/Posts"
import RegistrationLogin from "./components/RegistrationLogin/RegistrationLogin"
import ChangePassword from "./components/ChangePassword/ChangePassword"
import PendingPosts from "./components/PendingPosts/PendingPosts"
import FAQ from "./components/FAQ/FAQ"
import Contact from "./components/Contact/Contact"
import api from "./api/api"
import history from "./helpers/history"
import { deleteUserInfo, setUserInfo } from "./redux/userSlice"
import {
  AdminPrivateRoute,
  AuthorizedUserPrivateRoute,
  UnauthorizedUserPrivateRoute,
} from "./routes/PrivateRoutes"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await api.get("/users/me")
        dispatch(setUserInfo(res.data.user))
        setLoading(false)
      } catch (e) {
        dispatch(deleteUserInfo())
        // console.clear()
        console.log(e)
      }
    }
    getMe()
  }, [])

  return (
    <>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/post/:id" element={<PostSingle />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="/" element={<UnauthorizedUserPrivateRoute />}>
              <Route exact path="/signin" element={<RegistrationLogin />} />
              <Route exact path="/signup" element={<RegistrationLogin />} />
              <Route exact path="/forgot-password" element={<RegistrationLogin />} />
            </Route>

            <Route path="/" element={<AuthorizedUserPrivateRoute />}>
              <Route exact path="/chat" element={<Chat />} />
              <Route exact path="/chat/:id" element={<Chat />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/profile/create-post" element={<CreatePost />} />
              <Route exact path="/profile/my-posts" element={<MyPosts />} />
              <Route exact path="/profile/my-posts/:id" element={<MyPostsEdit />} />
              <Route exact path="/profile/confirmed-posts" element={<ConfirmedPosts />} />
              <Route exact path="/profile/favorite-posts" element={<FavoritePosts />} />
              <Route exact path="/profile/change-password" element={<ChangePassword />} />
            </Route>

            <Route path="/" element={<AdminPrivateRoute />}>
              <Route exact path="/profile/pending-posts" element={<PendingPosts />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
