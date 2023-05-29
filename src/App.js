import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import RandomTask from './components/RandomTask';
import MyTasks from './components/MyTasks';
import Login from './components/login/login.js';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/RandomTask" element={<RandomTask />} />
          <Route path="/MyTasks" element={<MyTasks />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;