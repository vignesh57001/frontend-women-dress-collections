import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dress from "../Components/Dress";
import { getAllDresses } from "../actions/dressActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

export default function Home() {
  const dispatch = useDispatch();

  const dressesstate = useSelector((state) => state.getAllDressesReducer);

  const { dresses, error, loading } = dressesstate;
  useEffect(() => {
    dispatch(getAllDresses());
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="container">
        <div class="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded text-dark">
          <div class="col-md-3 w-100">
            <input
              type="text"
              class="form-control w-100 mt-2"
              placeholder="search dresses for days"
              value=""
              fdprocessedid="w3gs1"
            />
          </div>
          <div class="col-md-3 w-100">
            <select class="form-control w-100 mt-2" fdprocessedid="rtugbe">
              <option value="all">All Days</option>
              <option value="veg">Sunday</option>
              <option value="nonveg">Monday</option>
              <option value="nonveg">Tuesday</option>
              <option value="nonveg">Wednesday</option>
              <option value="nonveg">Thursday</option>
              <option value="nonveg">Friday</option>
              <option value="nonveg">Saturday</option>
            </select>
          </div>
          <div class="col-md-3 w-100">
            <button class="btn w-100 mt-2" fdprocessedid="c27s6i">
              FILTER
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : (
          dresses.map((dress) => {
            return (
              <div
                className="col-lg-3"
                key={dress._id}
                style={{ marginTop: "25px", marginBottom: "20px" }}
              >
                <div>
                  <Dress dress={dress} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
