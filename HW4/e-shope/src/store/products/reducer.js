import {
    LOAD_PRODUCTS_REQUEST,
    LOAD_PRODUCTS_SUCCESS,
    SET_PRODUCTS,
    LOAD_PRODUCTS_FAILURE,
    TOGGLE_FAVORITE,
    ADD_TO_CART, REMOVE_FROM_CART
} from "./types";


const initialState = {
    products: [],
    isLoading: true
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_PRODUCTS_REQUEST:
            return {...state, isLoading: true}

        case LOAD_PRODUCTS_SUCCESS:
            return {...state, products: action.payload, isLoading: false}

        case SET_PRODUCTS: {
            return {...state, products: action.payload}
        }

        case LOAD_PRODUCTS_FAILURE:
            return {...state, err: action.payload}

        case TOGGLE_FAVORITE:
            const updateProductsFavData = state.products.map(el => {
                if (el.product_id === action.payload) {
                    el.isAddedToFavorite = !el.isAddedToFavorite;
                }
                return el;
            })
            favoritesToLocalStorage(action.payload)
            return {...state, products: updateProductsFavData}

        case ADD_TO_CART:
            const updateProductsCartAddData = state.products.map(el => {
                if (el.product_id === action.payload) {                 // console.log('action.payload', action.payload);

                    el.isAddedToCart = true;
                    el.quantityOfProduct = ++el.quantityOfProduct;
                }
                return el;
            })
            cartToLocalStorage(action.payload, updateProductsCartAddData)
            return {...state, products: updateProductsCartAddData}

        case REMOVE_FROM_CART:
            const updateProductsCartRemoveData = state.products.map(el => {
                if (el.product_id === action.payload) {

                    let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
                    let i = cartArray.findIndex(obj => +obj.id === el.product_id);

                    if (el.quantityOfProduct > 0) {
                        el.quantityOfProduct = --el.quantityOfProduct;

                        cartArray[i].count = el.quantityOfProduct;
                        localStorage.setItem('cart', JSON.stringify(cartArray));
                    }

                    if (el.quantityOfProduct === 0) {
                        el.isAddedToCart = false;
                        el.quantityOfProduct = 0;

                        cartArray = cartArray.filter(el => el !== cartArray[i]);
                        localStorage.setItem('cart', JSON.stringify(cartArray));
                    }
                }
                return el;
            })
            return {...state, products: updateProductsCartRemoveData}

        default:
            return state;
    }
}


const favoritesToLocalStorage = (id) => {
    let favArray = JSON.parse(localStorage.getItem('favorites')) || [];

    favArray = (favArray.includes(id) ?
            favArray.filter(el => el !== id)
            : favArray.concat(id)
    )

    localStorage.setItem('favorites', JSON.stringify(favArray));
}

const cartToLocalStorage = (id, products) => {

    let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

    products.forEach(el => {
        if (el.product_id === id) {
            let q = el.quantityOfProduct;

            let i = cartArray.findIndex(obj => +obj.id === el.product_id);

            cartArray[i] ?
                cartArray[i] = {id: `${id}`, count: `${q}`}
                : cartArray.push({id: `${id}`, count: `${q}`});
        }
    })

    localStorage.setItem('cart', JSON.stringify(cartArray));
}


export default reducer;