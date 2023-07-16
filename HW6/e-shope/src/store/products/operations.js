import axios from "axios";
import {LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS,
        // SET_PRODUCTS,
        LOAD_PRODUCTS_FAILURE} from "./types";
import {setProducts} from "./actions";


const path = '/tablets.json';


export const getProducts = () => (dispatch, getState) => {
    dispatch({type: LOAD_PRODUCTS_REQUEST})

    axios(`${path}`)
        .then(res => {
            const data = res.data.tablets;              // console.log(res.data.tablets)

            dispatch({type: LOAD_PRODUCTS_SUCCESS, payload: data})
            return data

        })
        .then(res =>{
            const newData = setStateFieldsToProductData(res);

            dispatch(setProducts(newData));
            // dispatch({type: SET_PRODUCTS, payload: newData});
        })
        .catch(err => {
            dispatch({type: LOAD_PRODUCTS_FAILURE, payload: err})
        })
}

const setStateFieldsToProductData = (data) => {
    return data.map(el => {
        let favArray = JSON.parse(localStorage.getItem('favorites')) || [];
        el.isAddedToFavorite = favArray.includes(el.product_id);


        let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
        let i = cartArray.findIndex(obj => +obj.id === el.product_id);

        cartArray[i] ? el.isAddedToCart = true : el.isAddedToCart = false;
        cartArray[i] ? el.quantityOfProduct = cartArray[i].count : el.quantityOfProduct = 0;

        return el;
    })
}