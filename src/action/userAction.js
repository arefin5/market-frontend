import axios from "axios";
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
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/user/login",
      { email, password },
      config
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
    //    localStorage.setItem('token',data.token);
    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (err) {
    dispatch({
      type: "USER_LOGIN_FAILURE",
      payload: err.response.data.message,
    });
  }
};
export const Logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT" });
  } catch (err) {
    dispatch({
      type: "USER_LOGOUT_FAILURE",
      payload: err.response.data.message,
    });
  }
};
//
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/user/register",
      { name, email, password },
      config
    );
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (err) {
    dispatch({
      type: "USER_REGISTER_FAILURE",
      payload: err.response.data.message,
    });
  }
};
