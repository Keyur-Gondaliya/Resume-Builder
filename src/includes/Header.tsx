import React from "react";

export default function Header() {
  return (
    <header className="header shadow-none">
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
            {/* <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Om oss
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="dropdown">
              <button
                className="btn header-profile-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="assets/image/header_profile.png"
                  alt="Header_Profile"
                  className="img-fluid"
                />
                Dan Ehrard
                <img
                  src="assets/image/arrow-up_2.png"
                  alt=""
                  className="img-fluid"
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 8.75V13.125C19.25 17.5 17.5 19.25 13.125 19.25H7.875C3.5 19.25 1.75 17.5 1.75 13.125V7.875C1.75 3.5 3.5 1.75 7.875 1.75H12.25"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.25 8.75H15.75C13.125 8.75 12.25 7.875 12.25 5.25V1.75L19.25 8.75Z"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.125 11.375H11.375"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.125 14.875H9.625"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    My Templates
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6402 9.51125C10.5527 9.5025 10.4477 9.5025 10.3515 9.51125C8.26898 9.44125 6.61523 7.735 6.61523 5.635C6.61523 3.49125 8.34773 1.75 10.5002 1.75C12.644 1.75 14.3852 3.49125 14.3852 5.635C14.3765 7.735 12.7227 9.44125 10.6402 9.51125Z"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.26488 12.74C4.14738 14.1575 4.14738 16.4675 6.26488 17.8762C8.67113 19.4862 12.6174 19.4862 15.0236 17.8762C17.1411 16.4587 17.1411 14.1488 15.0236 12.74C12.6261 11.1388 8.67988 11.1388 6.26488 12.74Z"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    My Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2598 12.7925L17.4998 10.5525L15.2598 8.3125"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.54004 10.5527H17.4388"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.29 17.5C6.42254 17.5 3.29004 14.875 3.29004 10.5C3.29004 6.125 6.42254 3.5 10.29 3.5"
                        stroke="#2D2D2D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>{" "}
                    Logout
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
