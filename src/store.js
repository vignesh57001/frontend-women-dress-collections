import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllDressesReducer } from "./reducers/dressReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";
import {
  placeOrderReducer,
  getUserOrdersReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllDressesReducer: getAllDressesReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem(currentUser))
  : null;
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
