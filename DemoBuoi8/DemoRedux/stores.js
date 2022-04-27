import { createStore } from "redux";
import countReducers from "./screen/count/reducers/CountReducers";

export const store = createStore(countReducers)