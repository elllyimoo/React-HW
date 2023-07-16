import React from 'react';
import scss from 'react';
import './body.scss';
import PropTypes from 'prop-types';
import coverImg from "../../themes/images/a_cover.jpg";
import ProductList from "../ProductList/ProductList";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import axios from "axios";

const path = '/tablets.json';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            products: []
        }

    }

    componentDidMount() {
        axios(`${path}`)
            .then(res => {
                return res.data.tablets;
            })
            .then (res => {             // console.log(res);
                const newData = this.setStateFieldsToProductData(res);        // console.log(newData);

                this.setProducts(newData);

                this.setLoading(false);
            })
    }
    

    setStateFieldsToProductData = (data) => {
        return data.map(el => {
            let favArray = JSON.parse(localStorage.getItem('favorites')) || [];
            el.isAddedToFavorite = favArray.includes(el.product_id);


            let cartArray = JSON.parse(localStorage.getItem('cart')) || [];
            el.isAddedToCart = cartArray.includes(el.product_id);

            el.quantityOfProduct = +localStorage.getItem(`${el.product_id}`) || 0;

            return el;
        })
    }

    setProducts = (data) => {
        this.setState(() => ({products: data}));    // console.log("products: ", products);
    }

    setLoading = (isIt) => {
        this.setState(() => ({isLoading: isIt}));   // console.log("isLoading: ", this.state.isLoading);
    }


    toggleFavorite = (id) => {
        const data = this.state.products.map(el => {
            if (el.product_id === id) {
                el.isAddedToFavorite = !el.isAddedToFavorite;
            }
            return el;
        })

        this.favoritesToLocalStorage(id);

        this.setProducts(data);
    }

    favoritesToLocalStorage = (id) => {
        let favArray = JSON.parse(localStorage.getItem('favorites')) || [];

        favArray = (favArray.includes(id) ?
                        favArray.filter(el => el !== id)
                        : favArray.concat(id)
        )

        localStorage.setItem('favorites', JSON.stringify(favArray));
    }


    addProductToCart = () => {
        const {products} = this.state;
        const {whoOpenModal} = this.props;

        const data = products.map(el => {
            if(el.product_id === whoOpenModal) {

                el.isAddedToCart = true;

                el.quantityOfProduct = ++el.quantityOfProduct;     // console.log(el.quantityOfProduct)
            }

            return el;
        })

        this.cartToLocalStorage(whoOpenModal);

        this.setProductQuantity(whoOpenModal);

        this.setProducts(data);

        this.props.toCloseModal();
    }

    setProductQuantity = (id) => {
        const {products} = this.state;
        products.map(el => {
            if(el.product_id === id) {        // console.log("quantityOfProduct: ", el.quantityOfProduct)
                localStorage.setItem(`${id}`, `${el.quantityOfProduct}`);
            }
        })
    }

    cartToLocalStorage = (id) => {      // console.log(id)

        let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

        if(!cartArray.includes(id)) {
            cartArray.push(id)
        }

        localStorage.setItem('cart', JSON.stringify(cartArray));
    }


    render() {
        const {isModalOpen, toOpenModal, whoOpen, whoOpenModal, toCloseModal} = this.props;
        const {isLoading, products} = this.state;

        return (
            <>
                <section className="body-section">
                    <img className="body-section__image" src={coverImg} alt="cover" />
                    <div className="body-section-content">

                        <div className="body-section-content__event">
                            <span>TABstore</span> event, presentation of new products at 20pm match 15th
                        </div>

                        <div className="body-section-content__welcome">
                            welcome to <span>TABstore</span>, check our latest products
                        </div>

                        <ProductList
                            isLoading={isLoading}
                            products={products}

                            toggleFavorite={this.toggleFavorite}

                            isModalOpen={isModalOpen}
                            whoOpen={whoOpen}

                            toOpenModal={toOpenModal}
                            toCloseModal={toCloseModal}
                        />
                    </div>
                </section>

                {(isModalOpen) &&
                <Modal
                    toClose={toCloseModal}
                    header="Adding item to cart"                                // closer={true}
                    modalText='Do you want to add this item to cart?'
                    actions={[
                        <Button
                            className = "myButton modal-btn"
                            onClick={this.addProductToCart}
                            backgroundColor='lightgray'
                            text='Add to cart'
                        />,
                        <Button
                            className = "myButton modal-btn"
                            onClick={toCloseModal}
                            backgroundColor='lightgray'
                            text='Cancel'
                        />
                    ]}
                    backgroundColor='#ffffff'
                />}

            </>
        );
    }
}

Body.defaultProps = {
}

Body.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    toOpenModal: PropTypes.func.isRequired,
    whoOpen: PropTypes.func.isRequired,
    whoOpenModal: PropTypes.number.isRequired,
    toCloseModal: PropTypes.func.isRequired,
}

export default Body;