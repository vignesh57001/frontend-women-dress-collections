import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import { deleteUser, getAllUsers } from "../actions/userActions";

export default function Userslist() {
  const dispatch = useDispatch();

  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { users, error, loading } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
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
      <hr />
      <h2>Users list</h2>
      <hr />
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-striped table-dark table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
