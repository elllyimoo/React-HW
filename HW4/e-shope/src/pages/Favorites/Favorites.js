import React from 'react';
import "./Favorites.scss";

import Product from "../../components/Product/Product";
import {useSelector} from "react-redux";
// import PropTypes from 'prop-types';


const Favorites = () => {
    const products = useSelector(state => state.products.products);        // console.log(products);

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
                                key={el.product_id}
                                product={el}/> }
                        return null
                    })
                }

            </div>
        </>
    );
}

Favorites.defaultProps = {
    product: []
}
// Favorites.propTypes = {}

export default Favorites;