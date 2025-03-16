import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.jsx'
import Course from './course/Course'
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import About from "./about/About";
import Home from './home/Home.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
  <Route index element={<Home/>} />
  <Route path="course" element={<Course/>} />
  <Route path="contact" element={<Contact />} />
  <Route path="blog/:category/" element={<Blog />} />
  <Route path="about" element={<About/>} />
  </Route>

</Routes>
  </BrowserRouter>
  </StrictMode>
)
