
import productReducer from "./product/product.reducer";
import counterReducer from "./counter/counter.reducer";
import { combineReducers } from "redux";
let rootReducer = combineReducers({
  product: productReducer,
  counter: counterReducer,
});

export default rootReducer;