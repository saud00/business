import { createStore, combineReducers } from "redux";
import ProductReducers from "./reducers/ProductReducers";
import CartReducer from "./reducers/CartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import { loadState, saveState } from "./localStorage";

const root = combineReducers({
  ProductReducers,
  CartReducer,
});

//const persistedState = loadState();

// Through this store we access all states
const store = createStore(
  root,
  // persistedState,
  devToolsEnhancer()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
