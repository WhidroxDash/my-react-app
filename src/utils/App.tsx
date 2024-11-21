import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
