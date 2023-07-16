import {SET_PRODUCTS, TOGGLE_FAVORITE, ADD_TO_CART, REMOVE_FROM_CART} from "./types";

export const setProducts = (data) => {
    return {type: SET_PRODUCTS, payload: data}
}

export const toggleFavorite = (data) => {
    return {type: TOGGLE_FAVORITE, payload: data}
}

export const addProductToCart = (data) => {
    return {type: ADD_TO_CART, payload: data}
}

export const removeProductFromCart = (data) => {
    return {type: REMOVE_FROM_CART, payload: data}
}

