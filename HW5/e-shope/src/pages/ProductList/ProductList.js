import React from 'react';
import './productLists.scss';

import Product from "../../components/Product/Product";
import {useSelector} from "react-redux";
// import PropTypes from 'prop-types';


const ProductList = () => {
    const products = useSelector(state => state.products.products);        // console.log(products);

    return (
        <div className='product-container'>
            {
                products.map(el => {
                        return <Product
                            key={el.product_id}
                            product={el}/>
                    })
            }
        </div>
    );
}

ProductList.defaultProps = {
    product: []
}
// ProductList.propTypes = {}

export default ProductList;