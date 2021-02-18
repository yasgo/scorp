import * as TYPES from "../../actions-types/lang";
import { store } from "../../";

export const langChange = lang => {
  store.dispatch({ type: TYPES.LANG_CHANGE, lang: lang })
}