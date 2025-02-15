import "./header.css";

function Header() {
  return (
    <div className="container-fluid">
      <header className="hero-background">
        {/* Top Banner */}
        <div className="top-banner">Unlock Your Tech Career with Expert Guidance!</div>

        {/* Navbar */}
        <div className="navigation">
          <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
              {/* Search Bar */}
              <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search Courses..." />
                <button className="search-btn">
                  <i className="bi bi-search"></i>
                </button>
              </div>

              {/* Logo and Motto */}
              <h1 className="text-center mx-auto">
                <a className="navbar-brand" href="#home">
                  <span className="dot">ShadowPeak</span>
                </a>
                {/* <p className="motto">Reaching the Pinnacle of Innovation</p> */}
              </h1>

              {/* Icons */}
              <div className="icons d-flex">
                <a href="#"><i className="bi bi-person"></i></a>
                <a href="#"><i className="bi bi-heart"></i></a>
                <a href="#"><i className="bi bi-bag"></i></a>
              </div>
            </div>
          </nav>

          {/* Navigation Links */}
          <nav className="navbar navbar-expand-lg bg-transparent pd-gap">
            <div className="container">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Courses</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Certifications</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Events</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
