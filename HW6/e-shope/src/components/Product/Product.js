import React from 'react';
import './product.scss';
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import PropTypes from "prop-types";

import {useDispatch} from "react-redux";
import {getIdOfActiveProduct} from "../../store/product/actions";
import {toggleFavorite} from "../../store/products/actions";

import {modalAction, openModal} from "../../store/modal/actions";


const Product = (props) => {
  const {product} = props;

  const dispatch = useDispatch();
  const whatIsActiveProduct = (id) => {
    dispatch(getIdOfActiveProduct(id));
  }

  const toToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  }

  const toOpenModal = (addOrDelete) => {
    dispatch(modalAction(addOrDelete));
    dispatch(openModal());
  }


  return (
      <div className='product-box'>

        <div className='product-box__img'>
          <Avatar src={product.avatar}/>
        </div>

        <div className='product-box__icons' onClick={() => whatIsActiveProduct(product.product_id)}>
          <Icon
              type="star"
              onClick={() => toToggleFavorite(product.product_id)}
              color={product.isAddedToFavorite ? "red" : "lightgray"}
              className="icons star tooltip-on-hover"
              tooltip={!product.isAddedToFavorite ?
                  (<span className="tooltip">favorite</span>)
                  : (<span className="tooltip">remove</span>)
              }
          />
          <Icon
              type="cart"
              onClick={product.isAddedToCart ? () => toOpenModal(false) : null}
              color={product.isAddedToCart ? "red" : "black"}
              className="icons cart-del tooltip-on-hover"
              tooltip={product.isAddedToCart ?
                  (<span className="tooltip">remove</span>)
                  : (<span className="tooltip">empty</span>)}
          />
        </div>

        <div className='product-box__name'>{product.model}</div>

        <div className='product-box__txt'>color: {product.color}</div>

        <div className='product-box__txt-price'>price: {product.price} UAN</div>

        <div className='product-box__button' onClick={() => whatIsActiveProduct(product.product_id)}>
          <Button onClick={() => toOpenModal(true)}
                  backgroundColor="lightgray"
                  text={product.isAddedToCart ? 'add one more' : 'add to cart'}
                  icon=<Icon
                  type="cart"
                  color={product.isAddedToCart ? "red" : "black"}
                  className="icons cart"/>

          quantity={product.quantityOfProduct}
          />
        </div>

      </div>
  );
}

Product.defaultProps = {
  product: {}
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product;