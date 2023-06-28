// import React from "react";

// export default function Loginscreen() {
//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <h1>Login Screen</h1>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

export default function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="login">
      <br />
      <br />
      <br />
      <div className="row justify-content-center mt-5 pt-3">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center mt-2" style={{ fontSize: "30px" }}>
            Login
          </h2>
          {loading && <Loading />}
          {error && <Error error="Inavlid Credentials" />}
          <div>
            <input
              required
              type="email"
              placeholder="Enter Your Email"
              className="form-control mt-4"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control mt-3"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <p>
              Admin : vigneshwar@gmail.com <br />
              password : 12345
            </p>

            <button onClick={login} className="btn btn-success mt-4 mb-4">
              LOGIN
            </button>
            <br />
            <button className="btn btn-info">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="/register"
                className="mt-2"
              >
                Click Here To Register
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
