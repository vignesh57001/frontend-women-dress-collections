import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDress } from "../actions/dressActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";

export default function Adddress() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [extralargeprice, setextralargeprice] = useState();
  const [img, setimg] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const adddressstate = useSelector((state) => state.addDressReducer);
  const { success, error, loading } = adddressstate;

  function formHandler(e) {
    e.preventDefault();
    const dress = {
      name,
      img,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
        extralarge: extralargeprice,
      },
    };
    console.log(dress);
    dispatch(addDress(dress));
  }

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
      <h2>Add Dress</h2>
      <hr />
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Dress added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control mt-2"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="small size price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="medium size price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="large size price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="extra large size price"
            value={extralargeprice}
            onChange={(e) => {
              setextralargeprice(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control mt-2"
            type="text"
            placeholder="image url"
            value={img}
            onChange={(e) => {
              setimg(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Add Dress
          </button>
        </form>
      </div>
    </div>
  );
}
