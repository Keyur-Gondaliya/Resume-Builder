export default function Header() {
  return (
    <header className="header shadow-none" style={{ paddingInlineEnd: "30px" }}>
      <div className="header-nav">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img
                src="assets/image/logo.svg"
                alt="resume builder logo"
                width={40}
              />
              Resume Builder
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icons"></span>
              <span className="navbar-toggler-icons"></span>
              <span className="navbar-toggler-icons"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About Me
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                    style={{ cursor: "pointer" }}
                  >
                    SignUp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
