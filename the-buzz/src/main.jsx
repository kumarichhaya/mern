import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'
import App from './App.jsx'
import About from './pages/site/About.jsx'
import Blog from "./pages/site/Blog.jsx";
import Article from "./pages/site/Article.jsx";
import Home from './pages/site/Home.jsx';
import Login from './pages/site/Login.jsx';
import Reset from './pages/site/Reset.jsx';
import SignIn from './pages/site/SignIn.jsx';
import Signup from './pages/site/Signup.jsx';
import  ForgetPassword from './pages/site/ForgetPassword.jsx';

import AdminLayout from './pages/admin/AdminLayout.jsx';
import Articles from './pages/admin/Articles.jsx';
import Category  from './pages/admin/Category.jsx';
import Users from './pages/admin/Users.jsx';

import UserLayout from './pages/user/UserLayout.jsx';
import Add_article from './pages/user/Add_article.jsx';
import Article_List from './pages/user/Article_List.jsx';
import Edit_article from './pages/user/Edit_article.jsx';
import Password from './pages/user/Password.jsx';
import Profile from './pages/user/Profile.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="article/:id" element={<Article />} />
    <Route path="blog/:category" element={<Blog />} />
    <Route path="login" element={<Login />} />
    <Route path="signin" element={<SignIn />} />
    <Route path="signup" element={<Signup/>} />
    <Route path="forget" element={< ForgetPassword />} />
    <Route path="reset" element={<Reset/>} />


</Route>
<Route path="/admin" element={<AdminLayout />}>
    <Route path="articles" element={<Articles/>} />
    <Route path="category" element={<Category/>} />
    <Route path="users" element={<Users/>} />
</Route>
<Route path="/user" element={<UserLayout />}>
    <Route path="addarticle" element={<Add_article/>} />
    <Route path="articlelist" element={<Article_List/>} />
    <Route path="editarticle" element={<Edit_article/>} />
    <Route path="password" element={<Password/>} />
    <Route path="profile" element={<Profile/>} />
    </Route>


</Routes>

  </BrowserRouter>
</StrictMode>,
)
