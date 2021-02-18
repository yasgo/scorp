import * as TYPES from "../../actions-types";

const initialState = document.documentElement.lang ? document.documentElement.lang : "en";

const lang = (state = initialState, action) => {
  switch (action.type) {

    case TYPES.LANG_CHANGE:
      return action.lang;

    default:
      return state;
  }
}

export default lang