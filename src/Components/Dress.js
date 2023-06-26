import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Dress({ dress }) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(dress, quantity, size));
  }
  return (
    <div
      style={{ margin: "10px" }}
      className="shadow-lg p-3 mb-5 bg-body rounded"
    >
      <br />
      <div onClick={handleShow}>
        <h1>{dress.name}</h1>
        <img
          src={dress.img}
          className="img-fluid"
          alt="dresses"
          style={{ height: "300px", width: "300px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Sizes</p>
          <select
            className="form-control"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            {dress.sizes.map((size) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">Price : {dress.prices[0][size] * quantity}/-</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn-primary" onClick={addtocart}>
            Add To Cart
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dress.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={dress.img}
            className="img-fluid"
            alt="dresses"
            style={{ height: "500px" }}
          />
          <p>{dress.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
