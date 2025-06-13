import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home/Home.jsx';
import Hero from './pages/home/Hero.jsx';
import Services from './pages/home/Services.jsx';
import Projects from './pages/home/Projects.jsx';
import Reviews from './pages/home/Reviews.jsx';
import Contact from './pages/home/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/hero" element={<Hero/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contact" element={<Contact/>} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
