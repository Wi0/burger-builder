import * as actionTypes from "../actions/actionTypes";
import { fetchOrdersFail } from "../actions/order";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: null,
  authRedirectPath: "/"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userId: action.userId,
        token: action.idToken,
        error: null,
        loading: false
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null
      };
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return {
        ...state,
        authRedirectPath: action.path
      };
    default:
      return state;
  }
};

export default reducer;
