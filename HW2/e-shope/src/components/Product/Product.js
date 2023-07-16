import React from 'react';
import scss from 'react';
import './product.scss';
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import PropTypes from "prop-types";

class Product extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {product, toOpenModal, toggleFavorite, whoOpen} = this.props;

        return (
            <div className='product-box'>
                <div className='product-box__img'>
                    <Avatar src={product.avatar}/>
                </div>

                <div className='product-box__star'>
                    <Icon
                        type="star"
                        onClick={() => toggleFavorite(product.product_id)}
                        color={product.isAddedToFavorite ? "red" : "lightgray"}
                        className="star-class" />
                </div>

                <div className='product-box__name'>{product.model}</div>

                <div className='product-box__txt'>color: {product.color}</div>

                <div className='product-box__txt-price'>price: {product.price} UAN</div>

                <div className='product-box__button' onClick={() => whoOpen(product.product_id)}>
                    <Button onClick={toOpenModal}
                            backgroundColor="lightgray"
                            text='add to cart'
                            icon=<Icon
                                type="cart"
                                color={product.isAddedToCart ? "red" : "black"}
                                className="cart-class"
                            />
                            quantity={product.quantityOfProduct}
                    />
                </div>

            </div>
        );
    }
}

Product.defaultProps = {
    product: {}
}

Product.propTypes = {
    product: PropTypes.object,
    toOpenModal: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    whoOpen: PropTypes.func.isRequired,
}

export default Product;