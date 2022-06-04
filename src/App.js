import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Helpes
import history from './helpers/history';
//components
import Main from './Components/Layout/Main/Main';
import Home from './Components/Views/Home/Home';
import PageNotFound from './Components/Layout/Errors/404/PageNotFound';

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
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
