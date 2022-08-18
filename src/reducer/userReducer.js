import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_LOGOUT_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
  } from "../constants/userConstants";
  export const userReducer = (state = {}, action) => {
      switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true};
        case USER_LOGIN_SUCCESS:
              return {loading: false, userInfo: action.payload};    
        case USER_LOGIN_FAILURE:
            return {loading: false, error: action.payload};

        case USER_LOGOUT:
            return {
            };
            default:
                return state;

      }    
}