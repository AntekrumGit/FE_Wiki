import { ActionTypes } from "../constants/action-types";

//===> 1. Reducer (simple func with state and Action obj ({type, payload}) with switch for Action.type)
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };


//===> 2. Combine reducers
import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
});
// export default reducers;


//===> 3. Store with combine reducers 
import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


//===> 4. Actions for reducer
export const ActionTypes = {
    SET_PRODUCTS: "SET_PRODUCTS",
    SELECTED_PRODUCT: "SELECTED_PRODUCT",
    REMOVE_SELECTED_PRODUCT: "REMOVE_SELECTED_PRODUCT",
  };

  export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  };
  
  export const selectedProduct = (product) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };  

//===> 5. Usage

const products = useSelector((state) => state.allProducts.products);
const dispatch = useDispatch();

dispatch(setProducts(response.data));