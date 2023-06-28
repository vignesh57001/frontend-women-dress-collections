export const addToCart = (dress, quantity, size) => (dispatch, getState) => {
  var cartItem = {
    name: dress.name,
    _id: dress._id,
    image: dress.img,
    size: size,
    quantity: Number(quantity),
    prices: dress.prices,
    price: dress.prices[0][size] * quantity,
  };

  if (cartItem.quantity > 10) {
    alert("you cant add item more than 10 quantities");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: dress });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (dress) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: dress });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
