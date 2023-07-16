import {combineReducers} from "redux";


import productsReducer from "./products/reducer";
import productReducer from "./product/reducer";
import modalReducer from "./modal/reducer";
import usersReducer from "./users/reducer";


const reducer = combineReducers({
    products: productsReducer,

    product: productReducer,

    modal: modalReducer,

    users: usersReducer,
})

export default reducer;