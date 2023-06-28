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

export const getDressByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_DRESSBYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_DRESSBYID_SUCCESS":
      return {
        loading: false,
        dress: action.payload,
      };
    case "GET_DRESSBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addDressReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DRESS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_DRESS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_DRESS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editDressReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_DRESS_REQUEST":
      return {
        editloading: true,
        ...state,
      };
    case "EDIT_DRESS_SUCCESS":
      return {
        editloading: false,
        editsuccess: true,
      };
    case "EDIT_DRESS_FAILED":
      return {
        editerror: action.payload,
        editloading: false,
      };
    default:
      return state;
  }
};
