import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="main">
      <div className="header_section">
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
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cars">
                    Cars
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/client">
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/price">
                    Price
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/rent">
                    Form
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Register
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
