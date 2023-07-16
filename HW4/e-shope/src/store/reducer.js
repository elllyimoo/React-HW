import {combineReducers} from "redux";


import productsReducer from "./products/reducer";
import productReducer from "./product/reducer";
import modalReducer from "./modal/reducer";


const reducer = combineReducers({
    products: productsReducer,

    product: productReducer,

    modal: modalReducer,
})

export default reducer;