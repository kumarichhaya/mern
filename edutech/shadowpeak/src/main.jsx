import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.jsx'
import Course from "./shadowpeak/src/course/Course"
import Blog from "./shadowpeak/src/blog/Blog"
import Contact from "./shadowpeak/src/contact/Contact"
import About from "./shadowpeak/src/about/About"
import Home from './home/Home.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
  <Route index element={<Home />} />
  <Route path="course" element={<Course />} />
  <Route path="contact" element={<Contact />} />
  <Route path="blog" element={<Blog />} />
  <Route path="about" element={<About />} />
  </Route>
</Routes>
  </BrowserRouter>
  </StrictMode>
)
