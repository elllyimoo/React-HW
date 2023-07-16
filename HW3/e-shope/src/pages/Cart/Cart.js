import React from 'react';
import './Cart.scss';
import PropTypes from 'prop-types';
import Product from "../../components/Product/Product";


const Cart = (props) => {
    const {products, whatIsActiveProduct, toggleFavorite, toOpenModal} = props;


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
                                toOpenModal={toOpenModal}

                                whatIsActiveProduct={whatIsActiveProduct}
                                toggleFavorite={toggleFavorite}

                                key={el.product_id}
                                product={el}/>
                        }
                        return null;
                    })
                }

            </div>
        </>
    );
}

Cart.defaultProps = {}

Cart.propTypes = {
    products: PropTypes.array.isRequired,
    whatIsActiveProduct: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    toOpenModal: PropTypes.func.isRequired,
}

export default Cart;