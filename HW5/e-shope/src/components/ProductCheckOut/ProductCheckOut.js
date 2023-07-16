import React from 'react';
import "./ProductCheckOut.scss";
import {useDispatch} from "react-redux";
import {addProductToCart, removeProductFromCart} from "../../store/products/actions";

const ProductCheckOut = (props) => {
    const {product} = props;


    const dispatch = useDispatch();
    const incrementQuantity = (id) => {
        dispatch(addProductToCart(id));
    }


    const decrementQuantity = (id) => {
        dispatch(removeProductFromCart(id));
    }


    return (
        <div className='checkout-item-box'>
            <div className='checkout-item-descr__model'>{product.model}</div>

            <div className='checkout-item-descr__color' style={{}}>
                <span className='gray'>color: </span>
                {product.color}
            </div>

            <div className='checkout-item-descr__quantity'>
                <span className='gray'>quantity: </span>
                <button className='checkout-item-descr__button'
                        onClick={() => decrementQuantity(product.product_id)}>-</button>
                {product.quantityOfProduct}
                <button className='checkout-item-descr__button'
                        onClick={() => incrementQuantity(product.product_id)}>+</button>

                <span className='checkout-item-descr__price'>
                <span className='gray'>price: </span>
                    {`${product.price}` * `${product.quantityOfProduct}`}
                </span>

            </div>



        </div>
    );
}

export default ProductCheckOut;