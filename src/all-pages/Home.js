import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDresses } from "../actions/dressActions";
import Error from "../Components/Error";
import Filter from "../Components/Filter";
import Loading from "../Components/Loading";
import Dress from "../Components/Dress";

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
      <Filter />
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
