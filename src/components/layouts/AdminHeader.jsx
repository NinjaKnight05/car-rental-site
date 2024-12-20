import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";/

export default function AdminHeader() {
  return ( 
    <div className="main">
      <div className="header_section position-absolute">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img
                src="/assets/images/lrlogo.png"
                width="140px"
                alt="LuxRyRides Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Brand
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/admin/addbrand">
                      Add
                    </Link>
                  
                  
                    <Link className="dropdown-item" to="/admin/managebrand">
                      Manage
                    </Link>
                  </div>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/admin/car">
                    Car
                  </Link>
                </li> */}
                  <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Car
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/admin/addcar">
                      Add
                    </Link>
                    <Link className="dropdown-item" to="/admin/managecar">
                      Manage
                    </Link>
                  </div>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/admin/viewuser">
                    User
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/viewbooking">
                    Booking
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
