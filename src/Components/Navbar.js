import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark fixed-top"
        style={{ lineHeight: "1", fontSize: "24px" }}
      >
        <a className="navbar-brand" href="/" style={{ marginLeft: "70px" }}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {currentUser ? (
              <div className="dropdown bg-white text-black mt-3">
                <a
                  className="dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/orders">
                    My Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser);
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            {/* <li className="nav-item active">
              <a
                className="nav-link"
                href="/login"
                onClick={() => {
                  dispatch(logoutUser);
                }}
              >
                Logout
              </a>
            </li> */}
            <li className="nav-item active">
              <a className="nav-link" href="/orders">
                Orders
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart &nbsp;{cartstate.cartItems.length}
              </a>
            </li>
            <li className="nav-item" style={{ fontSize: "17px" }}>
              <a className="nav-link" href="tel:+918526857001">
                <img
                  src="https://icon-library.com/images/white-phone-icon-png-transparent/white-phone-icon-png-transparent-14.jpg"
                  width="20px"
                />
                &nbsp;&nbsp;&nbsp;Contact: +91 85268 57001
              </a>
              <a className="nav-link" href="mailto:vigneshmenon2303@gmail.com">
                <img
                  src="https://w7.pngwing.com/pngs/237/796/png-transparent-email-computer-icons-webmail-message-email-miscellaneous-text-logo.png"
                  width="20px"
                />
                &nbsp;&nbsp;&nbsp;Email : vigneshmenon2303@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
