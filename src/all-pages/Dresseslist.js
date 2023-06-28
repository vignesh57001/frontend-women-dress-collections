import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteDress, getAllDresses } from "../actions/dressActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

export default function Dresseslist() {
  const dispatch = useDispatch();

  const dressesstate = useSelector((state) => state.getAllDressesReducer);
  const { dresses, error, loading } = dressesstate;

  useEffect(() => {
    dispatch(getAllDresses());
  }, []);

  return (
    <div>
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>Dresses List</h2>
      <hr />
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-striped table-dark table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dresses &&
            dresses.map((dress) => {
              return (
                <tr>
                  <td>{dress.name}</td>
                  <td>
                    Small : {dress.prices[0]["Small"]} <br />
                    Medium : {dress.prices[0]["Medium"]} <br />
                    Large : {dress.prices[0]["Large"]} <br />
                    ExtraLarge : {dress.prices[0]["ExtraLarge"]}
                  </td>
                  <td>{dress.category}</td>
                  <td>
                    <i
                      className="fa fa-trash m-1"
                      onClick={() => {
                        dispatch(deleteDress(dress._id));
                      }}
                    ></i>
                    <Link to={`/admin/editdress/${dress._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
