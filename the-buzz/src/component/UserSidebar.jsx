import React from 'react'
import { Link } from 'react-router'
function UserSidebar() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">The Buzz</a>

    <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">User Pannel</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/addarticle">Add Article</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/articlelist">Article List</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/user/editarticle">Edit Article</Link>
          </li> */}

          <li class="nav-item">
            <Link className="nav-link" to="/user/password">Password</Link>
          </li>
         
          <li className="nav-item">
            <Link className="nav-link" to="/user/profile">Profile</Link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default UserSidebar