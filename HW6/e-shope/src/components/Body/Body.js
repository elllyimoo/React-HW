import React from 'react';
import './body.scss';
import coverImg from "../../themes/images/a_cover.jpg";

import AppRoutes from "../../routes/AppRoutes";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

import {useEffect} from 'react';
import {connect} from 'react-redux';

import {addProductToCart, removeProductFromCart} from "../../store/products/actions";

import {closeModal} from "../../store/modal/actions";

import {getProducts} from "../../store/products/operations";
import {getUsersFromServer} from "../../store/users/actions";
// import {useDispatch} from 'react-redux'; // import {useCallback} from 'react';


const Body = (props) => {
  const {
    products: {isLoading},
    product: {activeProductID},
    modal: {isModalOpen, whatsModalAction},
    getProductList, getUsers
  } = props;

  // const dispatch = useDispatch();
  // const getUsers = useCallback(() => {
  //     dispatch(getUsersFromServer());
  // }, [dispatch])

  useEffect(() => {
    getProductList();
    getUsers();
  }, [getProductList, getUsers]);

  const toAddProductToCart = () => {
    props.addProductToCart(activeProductID);
    props.closeModal();
  }

  const toRemoveProductFromCart = () => {
    props.removeProductFromCart(activeProductID);
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

            <AppRoutes/>
          </div>
        </section>

        {(isModalOpen) &&
        <Modal
            header={whatsModalAction ? "Adding item to cart" : "Removing item from cart"}
            modalText={whatsModalAction
                ? "Do you want to add this item to cart?"
                : "Do you want to remove one of this item from cart?"}
            actions={[
              <Button
                  className="myButton modal-btn"
                  onClick={
                    whatsModalAction
                        ? toAddProductToCart
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
    getProductList: () => dispatch(getProducts()),

    getUsers: () => dispatch(getUsersFromServer()),

    addProductToCart: (data) => dispatch(addProductToCart(data)),
    removeProductFromCart: (data) => dispatch(removeProductFromCart(data)),

    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);