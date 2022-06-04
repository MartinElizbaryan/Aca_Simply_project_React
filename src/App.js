import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Helpes
import history from './helpers/history';
//components
import Main from './components/main/main';
import Home from './components/home/home';
import NoPage from './components/404/nopage';

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
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
