import * as TYPES from "../../actions-types/user";
import { store } from "../../";

export const userUpdate = user => {
  store.dispatch({ type: TYPES.USER_UPDATE, user: user })
}

export const userDelete = () => {
  store.dispatch({ type: TYPES.USER_DELETE })
}