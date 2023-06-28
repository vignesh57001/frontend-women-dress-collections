import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <a className="navbar-brand" href="/">
          <img
            className="shopping"
            src="https://png.pngitem.com/pimgs/s/173-1738297_shopify-logo-png-transparent-png.png"
            width="100px"
            height="60px"
            style={{ marginLeft: "80px" }}
          ></img>
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/admin">
                    User : {currentUser.name}
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/admin">
                    Admin
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/orders">
                    Orders
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/cart">
                    Cart {cartstate.cartItems.length}
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a
                    className="nav-link"
                    href="/login"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    Log Out
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item mr-3">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item mr-3">
                  <a className="nav-link" href="/cart">
                    Cart {cartstate.cartItems.length}
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
