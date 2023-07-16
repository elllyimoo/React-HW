import React from 'react';
import './Cart.scss';

import Product from "../../components/Product/Product";
import {useSelector} from "react-redux";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import {Link} from "react-router-dom";


const Cart = () => {
  const products = useSelector(state => state.products.products);        // console.log(products);
  const orderPlaced = useSelector(state => state.users.orderPlaced)      // console.log(orderPlaced);


  let cart = false;
  products.forEach(el => {
    if (el.isAddedToCart) return cart = true;
  })


  if (!cart && !orderPlaced) {
    return <div style={{color: '#ffaf44'}}>NO ITEMS IN CART!</div>
  }


  if (orderPlaced) {
    return <div style={{color: '#ffaf44'}}>THANK YOU FOR YOU ORDER!
      <div>order details have been sent to your email</div>
    </div>
  }


  return (
      <>
        <div className="nav-button-box">
          <Link className="nav-button-link" to='/checkout'>
            <Button
                className="myButton nav-button"
                text='check&order'
                icon=<Icon
                type="cart"
                color="red"
                className="icons cart"/>
            />
          </Link>
        </div>

        <div className="cart-title">CART ITEMS</div>
        <div className='cart-container'>
          {
            products.map(el => {
              if (el.isAddedToCart) {
                return <Product
                    key={el.product_id}
                    product={el}/>
              }
              return null
            })
          }

        </div>
      </>
  );
}


Cart.defaultProps = {
  product: []
}

export default Cart;