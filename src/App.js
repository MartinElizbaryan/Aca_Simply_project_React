import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Helpes
import history from './helpers/history';
//components
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Lost from './components/Lost/Lost';
import Found from './components/Found/Found';
import PageNotFound from './components/Errors/PageNotFound/PageNotFound';
import Cabinet from './components/Cabinet/Cabinet'
import ActivePosts from './components/ActivePosts/ActivePosts'
import Settings from './components/Profile/Profile'
import CreatePost from './components/CreatePosts/CreatePost'
import ChatWindow from './components/Chat/ChatWindow/ChatWindow'
import PostSingle from './components/Posts/PostSingle/PostSingle'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  window.scrollTo(0, 0)
  return (
    <>
      <ScrollToTop />
      <Router history={history}>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route index element={<Home />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/lost' element={<Lost />} />
            <Route exact path='/lost/:id' element={<PostSingle />} />
            <Route exact path='/found' element={<Found />} />
            <Route exact path='/found/:id' element={<PostSingle />} />
            <Route exact path='/cabinet' element={<Cabinet />} />
            <Route exact path='/chat' element={<ChatWindow />} />
            <Route exact path='/cabinet/activePosts' element={<ActivePosts />} />
            <Route exact path='/cabinet/profile' element={<Settings />} />
            <Route exact path='/cabinet/createPost' element={<CreatePost />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
