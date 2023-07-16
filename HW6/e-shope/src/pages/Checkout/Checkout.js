import React from 'react';
import './Checkout.scss';
import {useSelector} from "react-redux";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import ProductCheckOut from "../../components/ProductCheckOut/ProductCheckOut";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";


const Checkout = () => {
  const products = useSelector(state => state.products.products);

  let totalPrice = 0;
  const countTotalPrice = (itemPrice) => {
    return totalPrice += itemPrice;
  }


  return (
      <div>
        <div className='cart-check-out-title'>CHECK OUT</div>
        <span className='cart-check-out-order'>&order</span>
        <div className='cart-check-out-item-container'>
          {
            products.map(el => {
              if (el.isAddedToCart) {
                countTotalPrice(`${el.price}` * `${el.quantityOfProduct}`);

                return <ProductCheckOut key={el.product_id} product={el}/>
              }
              return null
            })
          }
        </div>
        <div className='cart-check-out-total-price'>
          <span className='gray'>total price: </span>
          {totalPrice} UAN
        </div>


        {totalPrice !== 0 &&
          <div className='form-check-out-title'>
            To place the order, please register - fill in the fields below...
            <span className='required'>*</span>
          </div>}
        {totalPrice !== 0 && <CheckoutForm/>}

        {totalPrice === 0
        && <div className="nav-button-box">
          <Link className="nav-button-link" to='/home'>
            <Button
                className="myButton nav-button to-home"
                text='choose another product'
            />
          </Link>
        </div>
        }
      </div>
  );

}

export default Checkout;