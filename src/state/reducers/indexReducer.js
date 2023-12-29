//THIS FILE IS FOR COMBINING ALL THE REDUCERS UNDER ONE AND EXPORTING IT.
//HERE WE HAVE ONLY ONE BUT WE CAN HAVE MAY AND WE CAN EXPORT THEM LIKE THIS
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  amount: amountReducer,
});

export default reducers;
