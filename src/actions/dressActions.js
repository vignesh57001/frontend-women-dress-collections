import axios from "axios";

export const getAllDresses = () => async (dispatch) => {
  dispatch({ type: "GET_DRESSES_REQUEST" });
  try {
    const response = await axios.get("/api/dresses/getalldresses");
    console.log(response);
    dispatch({ type: "GET_DRESSES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_DRESSES_FAILED", payload: error });
  }
};
