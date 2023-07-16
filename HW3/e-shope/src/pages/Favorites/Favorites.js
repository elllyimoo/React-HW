import React from 'react';
import "./Favorites.scss";
import PropTypes from 'prop-types';
import Product from "../../components/Product/Product";


const Favorites = (props) => {
    const {products, whatIsActiveProduct, toggleFavorite, toOpenModal} = props;

    let fav = false;
    products.forEach(el => {
        if (el.isAddedToFavorite) return fav = true;
    })

    if (!fav) {
        return <div style={{color: '#ffaf44'}}>NO FAVORITES!</div>
    }


    return (
        <>
            <div style={{color: '#8f08dd'}}>FAVORITES</div>
            <div className='favorites-container'>

                {
                    products.map(el => {

                        if (el.isAddedToFavorite) {
                            return <Product
                                toOpenModal={toOpenModal}

                                whatIsActiveProduct={whatIsActiveProduct}
                                toggleFavorite={toggleFavorite}

                                key={el.product_id}
                                product={el}/>
                        }
                        return null;
                    })
                }

            </div>
        </>
    );
}

Favorites.defaultProps = {}

Favorites.propTypes = {
    products: PropTypes.array.isRequired,
    whatIsActiveProduct: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    toOpenModal: PropTypes.func.isRequired,
}

export default Favorites;