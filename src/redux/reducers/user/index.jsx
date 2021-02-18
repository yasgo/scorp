import * as TYPES from "../../actions-types";

const localState = localStorage.getItem("user");
const defaultState = { name: "", email: "", password: "" };
const initialState = localState ? JSON.parse(localState) : defaultState;

const user = (state = initialState, action) => {
  switch (action.type) {

    case TYPES.USER_UPDATE:
      localStorage.setItem("user", JSON.stringify(action.user));
      return action.user;

    case TYPES.USER_DELETE:
      localStorage.removeItem("user");
      return defaultState;

    default:
      return state;
  }
}

export default user