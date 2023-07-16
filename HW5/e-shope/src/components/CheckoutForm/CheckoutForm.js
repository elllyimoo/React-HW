import React from 'react';
import './CheckoutForm.scss';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import Input from "../Input/Input";
import Button from "../Button/Button";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setUser, placeOrderToUser, orderPlaced} from "../../store/users/actions";
import {removeAllProductFromCart} from "../../store/products/actions";
// import {getUserAndOrder} from "../../store/users/selectors";
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


const validationFormSchema = Yup.object().shape({
    name: Yup.string()
        .required('*')
        .matches(/^[aA-zZ\s]+$/, "only alphabets are allowed")
        .min(3, '* /min - 3smb/'),
    surName: Yup.string()
        .required('*')
        .matches(/^[aA-zZ\s]+$/, "only alphabets are allowed")
        .min(3, '* /min - 3smb/'),
    age: Yup.number()
        .required('*')
        .min(1, '* to young! /min age: 1/')
        .max(120, '* to old! /max age: 120/'),
    email: Yup.string()
        .required('*')
        .email('* invalid email! /all rules for email required/'),
    address: Yup.string()
        .required('*')
        .min(10, '* /min - 10smb/'),
    phone: Yup.string()
        .required('*')
        .matches(/^[0-9]{10}$/, '* /numbers only - 10smb/'),
    // .matches(phoneRegExp, '* /phone/'),
    password: Yup.string()
        .required('*')
        .min(3, '* too short password! /min - 3smb/'),
    confirmPassword: Yup.string()
        .required('*')
        .oneOf(
            [Yup.ref("password")],
            "* does not match the password!"
        )
})


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

        // dispatch(getUserAndOrder(order));
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


    const submitForm = (values) => {
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

        let userDataAndUserOrder = getUserData(email);
        console.log('USER DATA and USER ORDERS:', userDataAndUserOrder);

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
                                <Input name="name" type="text" label="name: "/> {/*autoComplete="Olga"*/}
                                <Input name="surName" type="text" label="surname: "/> {/*autoComplete="Orlova"*/}
                                <Input name="age" type="text" label="age: "/> {/*autoComplete="27"*/}
                                <Input name="email" type="text" label="email: "/> {/*autoComplete="orlova@ol.com"*/}
                                <Input name="address" type="text" label="address: "/>
                                {/* autoComplete="03100 Orlova Str 18, app 18 Kiev Ukraine"*/}
                                <Input name="phone" type="text" label="phone: "/> {/* autoComplete="0691232323"*/}
                                <Input name="password" type="password" label="password: "/> {/* autoComplete="123"*/}
                                <Input name="confirmPassword" type="password" label="confirm password: "/>
                                {/* autoComplete="123"*/}
                            </div>

                            <div className="checkout-buttons-box">
                                <Button
                                    type="button"
                                    className="myButton checkout-button"
                                    onClick={coBackToCart}
                                    backgroundColor='lightgray'
                                    text='cancel'/>
                                <Button
                                    type="submit"
                                    className="myButton checkout-button"
                                    backgroundColor='lightgray'
                                    text='place order'/>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
}

export default CheckoutForm;