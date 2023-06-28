import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../Components/Checkout";

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const dispatch = useDispatch();

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row justify-content-center p-2" data-aos="fade-down">
        <div className=" col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          <br />
          <br />
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.name} [{item.sizes}]
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.sizes]} =
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.sizes));
                    }}
                  ></i>
                  <b> {item.quantity} </b>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1, item.sizes));
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-1 w-80">
                  <img
                    src={item.image}
                    alt="neww"
                    height="100px"
                    width="150px"
                  />
                </div>
                <div className="m-1 w-80">
                  <h1>
                    <i
                      className="fa fa-trash mt-4"
                      aria-hidden="true"
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    ></i>
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" col-md-6">
          <h2>Sub Total : {subtotal} Rs/-</h2>
          <br />
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}
