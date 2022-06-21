import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
// Helpers
import history from "./helpers/history"
//components
import Main from "./components/Main/Main"
import Home from "./components/Home/Home"
import Lost from "./components/Lost/Lost"
import Found from "./components/Found/Found"
import PageNotFound from "./components/Errors/PageNotFound/PageNotFound"
import Cabinet from "./components/Cabinet/Cabinet"
import ActivePosts from "./components/ActivePosts/ActivePosts"
import Settings from "./components/Profile/Profile"
import Chat from "./components/Chat/Chat"
import PostSingle from "./components/Posts/PostSingle/PostSingle"
import RegistrationLogin from "./components/RegistrationLogin/RegistrationLogin"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/lost" element={<Lost />} />
            <Route exact path="/post/:id" element={<PostSingle />} />
            <Route exact path="/found" element={<Found />} />
            <Route exact path="/cabinet" element={<Cabinet />} />
            <Route exact path="/chat/:id" element={<Chat />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/cabinet/activePosts" element={<ActivePosts />} />
            <Route exact path="/cabinet/profile" element={<Settings />} />
            <Route exact path="/cabinet" element={<Cabinet />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/signin" element={<RegistrationLogin />} />
            <Route exact path="/signup" element={<RegistrationLogin />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
