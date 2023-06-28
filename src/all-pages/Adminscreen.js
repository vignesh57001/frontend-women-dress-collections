import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Adddress from "./Adddress";
import Editdress from "./Editdress";
import Orderslist from "./Orderslist";
import Dresseslist from "./Dresseslist";
import Userslist from "./Userslist";

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>
          <hr />
          <ul className="adminfunctions">
            <li>
              <Link className="noww" to={"/admin/userslist"}>
                Users List
              </Link>
            </li>
            <li>
              <Link className="noww" to={"/admin/dresseslist"}>
                Dresses List
              </Link>
            </li>
            <li>
              <Link className="noww" to={"/admin/adddress"}>
                Add Dress
              </Link>
            </li>
            <li>
              <Link className="noww" to={"/admin/orderslist"}>
                Orders List
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/dresseslist" component={Dresseslist} exact />
            <Route path="/admin/adddress" component={Adddress} exact />
            <Route
              path="/admin/editdress/:dressid"
              component={Editdress}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
