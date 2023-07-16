import React from 'react';
import './body.scss';
import coverImg from "../../themes/images/a_cover.jpg";

import AppRoutes from "../../routes/AppRoutes";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

import {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getProducts} from "../../store/products/operations";
import {addProductToCart, removeProductFromCart} from "../../store/products/actions";
// import {useDispatch} from 'react-redux';
// import {ADD_TO_CART, REMOVE_FROM_CART} from "../../store/productList/types";
import {closeModal} from "../../store/modal/actions";
import {getUsersFromServer} from "../../store/users/actions";



const Body = (props) => {
    const { products: {isLoading},
        product: {activeProductID},
        modal: {isModalOpen, whatsModalAction},
        getProducts} = props;                                                       // console.log('Body props:', props)

    const dispatch = useDispatch();
    const getUsers = () => {
        dispatch(getUsersFromServer());
    }


    useEffect(() => {
        getProducts();
        getUsers();
    }, [getProducts]);


    // const dispatch = useDispatch();
    const toAddProductToCart = () => {                  // console.log("activeProductID: ", activeProductID);
        props.addProductToCart(activeProductID);        // dispatch({type: ADD_TO_CART, payload: activeProductID});
        props.closeModal();
    }

    const toRemoveProductFromCart = () => {
        props.removeProductFromCart(activeProductID);   // dispatch({type: REMOVE_FROM_CART, payload: activeProductID});
        props.closeModal();
    }



    if (isLoading) {
        return <Loading/>
    }

    return (
        <>
            <section className="body-section">
                <img className="body-section__image" src={coverImg} alt="cover"/>
                <div className="body-section-content">

                    <div className="body-section-content__event">
                        <span>TABstore</span> event, presentation of new products at 20pm match 15th
                    </div>

                    <div className="body-section-content__welcome">
                        welcome to <span>TABstore</span>, check our latest products
                    </div>

                    <AppRoutes />
                </div>
            </section>

            {(isModalOpen) &&
            <Modal
                header={whatsModalAction ? "Adding item to cart" : "Removing item from cart"}           // closer={true}
                modalText={whatsModalAction ? "Do you want to add this item to cart?" : "Do you want to remove one of this item from cart?"}
                actions={[
                    <Button
                        className="myButton modal-btn"
                        onClick={
                            whatsModalAction ?
                            toAddProductToCart
                            : toRemoveProductFromCart}
                        backgroundColor='lightgray'
                        text={whatsModalAction ? 'Add to cart' : 'Remove from cart'}
                    />,
                    <Button
                        className="myButton modal-btn"
                        onClick={props.closeModal}
                        backgroundColor='lightgray'
                        text='Cancel'
                    />
                ]}
                backgroundColor='#ffffff'
            />
            }

        </>
    );
}


const mapStateToProps = (state) => {
    return {
        products: {
            isLoading: state.products.isLoading,
            // products: state.products.products,
        },

        product: {
            activeProductID: state.product.activeProductID,
        },

        modal: {
            isModalOpen: state.modal.isModalOpen,
            whatsModalAction: state.modal.whatsModalAction,
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),

        addProductToCart: (data) => dispatch(addProductToCart(data)),
        removeProductFromCart: (data) => dispatch(removeProductFromCart(data)),

        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);