import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Error from "../Components/Error";
import Success from "../Components/Success";
import Loading from "../Components/Loading";

export default function Ordersscreen() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;

  useEffect(() => {
    dispatch(getUserOrders());
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
      <h1 style={{ fontSize: "35px" }}> My Orders</h1>
      <hr />
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error="Something Went Wrong" />}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className="col-md-8"
                style={{ backgroundColor: "aqua", color: "black" }}
              >
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <h1>
                            {item.name} [{item.sizes}] * {item.quantity} =
                            {item.price}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Address</h2>
                    <hr />
                    <h1>Street : {order.shippingAddress.street} </h1>
                    <h1>City : {order.shippingAddress.city} </h1>
                    <h1>Country : {order.shippingAddress.country} </h1>
                    <h1>Pin Code : {order.shippingAddress.pincode} </h1>
                  </div>
                  <div className="text-left w-100 m-1">
                    <h2 style={{ fontSize: "25px" }}>Order Info</h2>
                    <hr />
                    <h1>Order Amount : {order.orderAmount} </h1>
                    <h1>Date : {order.createAt.substring(0, 10)} </h1>
                    <h1>Transaction Id : {order.transactionid} </h1>
                    <h1>Order Id : {order._id} </h1>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
