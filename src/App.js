import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
// Helpers
import history from "./helpers/history"
//components
import Main from "./components/Main/Main"
import Home from "./components/Home/Home"
import PageNotFound from "./components/Errors/PageNotFound/PageNotFound"
import Profile from "./components/Profile/Profile"
import CreatePost from "./components/CreatePosts/CreatePost"
import Chat from "./components/Chat/Chat"
import PostSingle from "./components/PostSingle/PostSingle"
import Posts from "./components/Posts/Posts"
import RegistrationLogin from "./components/RegistrationLogin/RegistrationLogin"
import FAQ from "./components/FAQ/FAQ"
import Contact from "./components/Contact/Contact"
import { useDispatch } from "react-redux"
import api from "./api/api"
import { signIn } from "./redux/userSlice"
import Settings from "./components/Settings/Settings"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const getMe = async () => {
      try {
        const res = await api.get("/users/me")
        dispatch(signIn(res.data.user))
      } catch (e) {
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
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/post/:id" element={<PostSingle />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/chat/:id" element={<Chat />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/profile/create-post" element={<CreatePost />} />
            <Route exact path="/profile/my-posts" element={<MyPosts />} />
            <Route exact path="/profile/confirmed-posts" element={<ConfirmedPosts />} />
            <Route exact path="/profile/favorite-posts" element={<FavoritePosts />} />
            <Route exact path="/profile/settings" element={<Settings />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/signin" element={<RegistrationLogin />} />
            <Route exact path="/signup" element={<RegistrationLogin />} />
            <Route exact path="/forgot-password" element={<RegistrationLogin />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
