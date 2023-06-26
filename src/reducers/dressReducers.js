export const getAllDressesReducer = (state = { dresses: [] }, action) => {
  switch (action.type) {
    case "GET_DRESSES_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_DRESSES_SUCCESS":
      return {
        loading: false,
        dresses: action.payload,
      };
    case "GET_DRESSES_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
