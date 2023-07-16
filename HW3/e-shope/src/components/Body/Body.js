import React from 'react';
import './body.scss';
import {useState, useEffect} from 'react';
import coverImg from "../../themes/images/a_cover.jpg";
import AppRoutes from "../../routes/AppRoutes";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import axios from "axios";
import Loading from "../Loading/Loading";

const path = '/tablets.json';

const Body = () => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [activeProductID, setActiveProductID] = useState(0);
    const [whatsModalAction, setModalAction] = useState(false);
    const [isModalOpen, setModalState] = useState(false);



    const openModal = (addOrDelete) => {
        modalAction(addOrDelete);
        setModalState(true);            // console.log('btn adding to cart clicked >> open Modal');
    }

    const modalAction = (addOrDelete) => {
        (addOrDelete) ? setModalAction(true) : setModalAction(false);  // console.log('whatsModalAction:', whatsModalAction);
    }

    const whatIsActiveProduct = (id) => {
        setActiveProductID(id);
    }

    const closeModal = () => {
        setModalState(false);            // console.log('>> close Modal');
    }




    useEffect(() => {
        axios(`${path}`)
            .then(res => {
                return res.data.tablets;
            })
            .then(res => {                                                                  // console.log(res);
                const newData = setStateFieldsToProductData(res);                           // console.log(newData);

                setStateProducts(newData);

                updateLoading(false);

            })
    }, []);

    const setStateFieldsToProductData = (data) => {
        return data.map(el => {
            let favArray = JSON.parse(localStorage.getItem('favorites')) || [];
            el.isAddedToFavorite = favArray.includes(el.product_id);


            let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
            let i = cartArray.findIndex(obj => +obj.id === el.product_id);              // i = Boolean(i);

            cartArray[i] ? el.isAddedToCart = true : el.isAddedToCart = false;
            cartArray[i] ? el.quantityOfProduct = cartArray[i].count : el.quantityOfProduct = 0;

            return el;
        })
    }

    const setStateProducts = (data) => {
        setProducts(data);                                                  // console.log("products: ", products);
    }

    const updateLoading = (isIt) => {
        setLoading(isIt);                                                  // console.log("isLoading: ", isLoading);
    }




    const toggleFavorite = (id) => {
        const data = products.map(el => {
            if (el.product_id === id) {
                el.isAddedToFavorite = !el.isAddedToFavorite;
            }
            return el;
        })

        favoritesToLocalStorage(id);

        setStateProducts(data);
    }

    const favoritesToLocalStorage = (id) => {
        let favArray = JSON.parse(localStorage.getItem('favorites')) || [];

        favArray = (favArray.includes(id) ?
                favArray.filter(el => el !== id)
                : favArray.concat(id)
        )

        localStorage.setItem('favorites', JSON.stringify(favArray));
    }




    const addProductToCart = () => {
        const data = products.map(el => {
            if (el.product_id === activeProductID) {

                el.isAddedToCart = true;
                el.quantityOfProduct = ++el.quantityOfProduct;
            }
            return el;
        })

        cartToLocalStorage(activeProductID);

        setStateProducts(data);

        closeModal();
    }

    const cartToLocalStorage = (id) => {

        let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

        products.forEach(el => {
            if (el.product_id === id) {
                let q = el.quantityOfProduct;

                let i = cartArray.findIndex(obj => +obj.id === el.product_id);

                cartArray[i] ?
                    cartArray[i] = {id: `${id}`, count: `${q}`}
                    : cartArray.push({id: `${id}`, count: `${q}`});
            }
        })

        localStorage.setItem('cart', JSON.stringify(cartArray));
    }

    const removeProductFromCart = () => {
        const data = products.map(el => {
            if (el.product_id === activeProductID) {

                let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
                let i = cartArray.findIndex(obj => +obj.id === el.product_id);

                if (el.quantityOfProduct > 0) {
                    el.quantityOfProduct = --el.quantityOfProduct;

                    cartArray[i].count = el.quantityOfProduct;
                    localStorage.setItem('cart', JSON.stringify(cartArray));
                }

                if (el.quantityOfProduct === 0) {
                    el.isAddedToCart = false;
                    el.quantityOfProduct = 0;

                    cartArray = cartArray.filter(el => el !== cartArray[i]);
                    localStorage.setItem('cart', JSON.stringify(cartArray));
                }
            }
            return el;
        })

        setStateProducts(data);

        closeModal();
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

                    <AppRoutes
                        products={products}

                        toggleFavorite={toggleFavorite}

                        whatIsActiveProduct={whatIsActiveProduct}

                        toOpenModal={openModal}
                    />
                </div>
            </section>

            {(isModalOpen) &&
            <Modal
                toClose={closeModal}
                header={whatsModalAction ? "Adding item to cart" : "Removing item from cart"}                                // closer={true}
                modalText={whatsModalAction ? "Do you want to add this item to cart?" : "Do you want to remove one of this item from cart?"}
                actions={[
                    <Button
                        className="myButton modal-btn"
                        onClick={whatsModalAction ? addProductToCart : removeProductFromCart}
                        backgroundColor='lightgray'
                        text={whatsModalAction ? 'Add to cart' : 'Remove from cart'}
                    />,
                    <Button
                        className="myButton modal-btn"
                        onClick={closeModal}
                        backgroundColor='lightgray'
                        text='Cancel'
                    />
                ]}
                backgroundColor='#ffffff'
            />}

        </>
    );

}

export default Body;