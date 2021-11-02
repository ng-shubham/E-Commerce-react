import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductReducer from "./Reducers/ProductsReducer";

const store = createStore(ProductReducer, composeWithDevTools());

export default store;
