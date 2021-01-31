import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { dataReducer } from "./reducer/dataReducer";

const storeEnhancer = compose(applyMiddleware(thunk));

const createAppStore = () => {
  let store = createStore(dataReducer, { data: [] }, storeEnhancer);
  return { store };
};
export default createAppStore;
