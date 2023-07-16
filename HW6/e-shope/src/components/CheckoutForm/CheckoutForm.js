import React from 'react';
import './CheckoutForm.scss';
import {Formik, Form} from 'formik';
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setUser, placeOrderToUser, orderPlaced} from "../../store/users/actions";
import {removeAllProductFromCart} from "../../store/products/actions";
import {validationFormSchema} from "./ValidationFormSchema";


const CheckoutForm = () => {
  const products = useSelector(state => state.products.products);
  const users = useSelector(state => state.users.users);


  const dispatch = useDispatch();
  const setNewUser = (newUser) => {
    dispatch(setUser(newUser));
  }


  const setOrderToUser = (email) => {
    const order = [];
    let orderTotalPrice = 0;
    products.forEach((el) => {
      if (el.isAddedToCart) {
        let newOrder = {
          product_id: el.product_id,                           // order[`product_id #${id}`] = el.product_id;
          model: el.model,
          color: el.color,
          quantity: el.quantityOfProduct,
          price: el.price,
          price_product_total: `${el.price}` * `${el.quantityOfProduct}`,
        }
        order.push(newOrder)
        orderTotalPrice += `${el.price}` * `${el.quantityOfProduct}`;
      }
    })
    order.push({
      order_number: Math.floor(Math.random() * 100001),
      price_order_total: orderTotalPrice,
      userIdentifier: email
    });

    dispatch(placeOrderToUser(order));
  }


  const getUserData = (email) => {
    return users.find(obj => obj.email === email);
  }


  const userOrderPlaced = () => {
    dispatch(orderPlaced(true));
    setTimeout(() => {
      dispatch(orderPlaced(false));
    }, 5000)
  }


  const clearCart = () => {
    dispatch(removeAllProductFromCart());
  }


  const submitForm = (values, props) => {
    const {name, surName, age, email, address, phone, password} = values;

    const newUser = {
      name: name,
      surname: surName,
      age: age,
      email: email,
      address: address,
      phone: phone,
      password: password,
      orders: []
    }
    setNewUser(newUser);

    setOrderToUser(email);

    // НАПРИМЕР >> имитация запроса на сервер и получение ответа (заказ на юзера записался?)
    setTimeout(() => {
      let userDataAndUserOrder = getUserData(email);
      console.log('USER DATA and USER ORDERS:', userDataAndUserOrder);
    }, 1000);

    userOrderPlaced()

    clearCart();

    coBackToCart();
  };


  const history = useHistory();
  const coBackToCart = () => {
    history.goBack();
  }


  return (
      <div>
        <Formik
            initialValues={{
              name: '',
              surName: '',
              age: '',
              email: '',
              address: '',
              phone: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={submitForm}
            validationSchema={validationFormSchema}
        >
          {(formikProps) => {
            return (
                <Form>
                  <div className="checkout-inputs-box">
                    <Input name="name" type="text" label="name: "/>
                    <Input name="surName" type="text" label="surname: "/>
                    <Input name="age" type="text" label="age: "/>
                    <Input name="email" type="text" label="email: "/>
                    <Input name="address" type="text" label="address: "/>
                    <Input name="phone" type="text" label="phone: "/>
                    <Input name="password" type="password" label="password: "/>
                    <Input name="confirmPassword" type="password" label="confirm password: "/>
                  </div>

                  <div className="checkout-buttons-box">
                    <Button
                        type="button"
                        className="myButton checkout-button"
                        onClick={coBackToCart}
                        backgroundColor='lightgray'
                        text='cancel'
                    />
                    <Button
                        type="submit"
                        className="myButton checkout-button"
                        backgroundColor='lightgray'
                        text='place order'
                    />
                  </div>
                </Form>
            )
          }}
        </Formik>
      </div>
  );
}

export default CheckoutForm;