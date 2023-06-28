import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDress, getDressById } from "../actions/dressActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";

export default function Editdress({ match }) {
  const dispatch = useDispatch();

  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [extralargeprice, setextralargeprice] = useState();
  const [img, setimg] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getdressbyidstate = useSelector((state) => state.getDressByIdReducer);
  const { dress, error, loading } = getdressbyidstate;
  const editdressstate = useSelector((state) => state.editDressReducer);
  const { editloading, editerror, editsuccess } = editdressstate;

  useEffect(() => {
    if (dress) {
      if (dress._id == match.params.dressid) {
        setname(dress.name);
        setdescription(dress.description);
        setcategory(dress.category);
        setsmallprice(dress.prices[0]["Small"]);
        setmediumprice(dress.prices[0]["Medium"]);
        setlargeprice(dress.prices[0]["Large"]);
        setextralargeprice(dress.prices[0]["ExtraLarge"]);
        setimg(dress.img);
      } else {
        dispatch(getDressById(match.params.dressid));
      }
    } else {
      dispatch(getDressById(match.params.dressid));
    }
  }, [dress, dispatch]);

  function formHandler(e) {
    e.preventDefault();
    const editeddress = {
      _id: match.params.dressid,
      name,
      img,
      description,
      category,
      prices: {
        Small: smallprice,
        Medium: mediumprice,
        Large: largeprice,
        ExtraLarge: extralargeprice,
      },
    };
    dispatch(editDress(editeddress));
  }

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
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Dress</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Dress details edited successfully" />}
        {editloading && <Loading />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small size price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium size price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large size price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="extralarge size price"
            value={extralargeprice}
            onChange={(e) => {
              setextralargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={img}
            onChange={(e) => {
              setimg(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Dress
          </button>
        </form>
      </div>
    </div>
  );
}
