import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;

  const dispatch = useDispatch();

  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="sSomething Went Wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHander}
        currency="INR"
        stripeKey="pk_test_51NMH64SC96NNfb5KllKThdnZunzIMuDERkgnUJJToMJFge0qmXQfFM7NSi0XW2SthAd6tkD329CLuyEdAFREtHeQ00czbU58d4"
      >
        <button className="btn btn-success " style={{ marginLeft: "180px" }}>
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}
