import axios from "axios";
import { config } from "../config";

export const getAllDresses = () => async (dispatch) => {
  dispatch({ type: "GET_DRESSES_REQUEST" });
  try {
    const response = await axios.get(`${config.api}/api/dresses/getalldresses`);
    console.log(response);
    dispatch({ type: "GET_DRESSES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_DRESSES_FAILED", payload: error });
  }
};

export const getDressById = (dressid) => async (dispatch) => {
  dispatch({ type: "GET_DRESSBYID_REQUEST" });
  try {
    const response = await axios.post(
      `${config.api}/api/dresses/getdressbyid`,
      {
        dressid,
      }
    );
    console.log(response);
    dispatch({ type: "GET_DRESSBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_DRESSBYID_FAILED", payload: error });
  }
};

export const filterDresses = (searchkey, category) => async (dispatch) => {
  dispatch({ type: "GET_DRESSES_REQUEST" });
  try {
    var filteredDresses;
    const response = await axios.get(`${config.api}/api/dresses/getalldresses`);
    filteredDresses = response.data.filter((dress) =>
      dress.name.toLowerCase().includes(searchkey)
    );
    if (category != "all") {
      filteredDresses = response.data.filter(
        (dress) => dress.category.toLowerCase() == category
      );
    }
    dispatch({ type: "GET_DRESSES_SUCCESS", payload: filteredDresses });
  } catch (error) {
    dispatch({ type: "GET_DRESSES_FAILED", payload: error });
  }
};

export const addDress = (dress) => async (dispatch) => {
  dispatch({ type: "ADD_DRESS_REQUEST" });
  try {
    const response = await axios.post(`${config.api}/api/dresses/adddress`, {
      dress,
    });
    console.log(response);
    dispatch({ type: "ADD_DRESS_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_DRESS_FAILED", payload: error });
  }
};

export const editDress = (editeddress) => async (dispatch) => {
  dispatch({ type: "EDIT_DRESS_REQUEST" });
  try {
    const response = await axios.post(`${config.api}/api/dresses/editdress`, {
      editeddress,
    });
    console.log(response);
    dispatch({ type: "EDIT_DRESS_SUCCESS" });
    window.location.href = "/admin/dresseslist";
  } catch (error) {
    dispatch({ type: "EDIT_DRESS_FAILED", payload: error });
  }
};

export const deleteDress = (dressid) => async (dispatch) => {
  try {
    const response = await axios.post(`${config.api}/api/dresses/deletedress`, {
      dressid,
    });
    alert("Dress Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
