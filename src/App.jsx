import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Homesection from './components/Homesection.jsx';
import AllCars from './components/AllCars.jsx';
import AboutUs from './components/AboutUs.jsx';
import BrandCars from './components/BrandCars.jsx';
import CategoryCars from './components/CategoryCars.jsx';
import Blog from './components/Blog.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/login.jsx';
import Signup from './components/Signup.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';


function AppContent() {
  const location = useLocation();

  // Hide Header & Footer when user is on /login
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Show Header only if NOT login */}
      {!hideLayout && <Header />}

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homesection />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/brand/:brandName" element={<BrandCars />} />
          <Route path="/category/:categoryName" element={<CategoryCars />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Show Footer only if NOT login */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
