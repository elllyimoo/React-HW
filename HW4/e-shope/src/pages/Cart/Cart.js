import React from 'react';
import './Cart.scss';

import Product from "../../components/Product/Product";
import {useSelector} from "react-redux";
// import PropTypes from 'prop-types';


const Cart = () => {
    const products = useSelector(state => state.products.products);        // console.log(products);

    let cart = false;
    products.forEach(el => {
        if (el.isAddedToCart) return cart = true;
    })

    if (!cart) {
        return <div style={{color: '#ffaf44'}}>NO ITEMS IN CART!</div>
    }

    return (
        <>
            <div style={{color: '#8f08dd'}}>CART ITEMS</div>
            <div className='cart-container'>
                {
                    products.map(el => {
                        if (el.isAddedToCart) {
                            return <Product
                                key={el.product_id}
                                product={el}/> }
                        return null;
                    })
                }

            </div>
        </>
    );
}

Cart.defaultProps = {
    product: []
}
// Cart.propTypes = {}

export default Cart;