// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ReportPage from './components/ReportPage';
import ReportsPage from './components/ReportsPage2';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/report" element={<ReportPage />} />
    <Route path="/reports" element={<ReportsPage />} />
  </Routes>
</Router>
  );
}

export default App;
