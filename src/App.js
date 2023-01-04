import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Wedding from './pages/Wedding';
import Couple from './pages/Couple';
import Destination from './pages/Destination';
import RSVP from './pages/RSVP';
import PageNotFound from './pages/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import ScrollToTop from './utils/ScrollToTop';

import './styles.css';


function App() {
  return (
      <Router>
        <ScrollToTop />
          <Header />
          <div className='mainContent'>
            <Routes>
              <Route
                path="/"
                element={<Wedding />}
              />
              <Route
                path="/Couple"
                element={<Couple />}
              />
              <Route
                path="/Destination"
                element={<Destination />}
              />
              <Route
                path="/RSVP"
                element={<RSVP />}
              />
              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
          </div>
          <Footer />
      </Router>
  );
}

export default App;
