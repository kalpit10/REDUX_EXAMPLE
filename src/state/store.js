// LIKE A BIG CONTAINER THAT HOLDS ALL THE DATA(STATE) OF OUR APPLICATION
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/indexReducer";
//it helps in running asynchronous functions in redux
import { thunk } from "redux-thunk";

export const store = configureStore(reducers, {}, applyMiddleware[thunk]);
