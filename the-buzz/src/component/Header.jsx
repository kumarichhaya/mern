import './component.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark container-gap">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#" >The Buzz</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul className="dropdown-menu  bg-dark" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item text-white " href="#">Action</a></li>
                                <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
