import React from 'react';
import './productLists.scss';
import PropTypes from 'prop-types';
import Product from "../../components/Product/Product";


const ProductList = (props) => {
    const {products, whatIsActiveProduct, toggleFavorite, toOpenModal} = props;

    return (
        <div className='product-container'>
            {products.map(el => {
                return <Product
                    toOpenModal={toOpenModal}

                    whatIsActiveProduct={whatIsActiveProduct}
                    toggleFavorite={toggleFavorite}

                    key={el.product_id}
                    product={el}/>
            })}
        </div>
    );

}

ProductList.defaultProps = {}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    whatIsActiveProduct: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    toOpenModal: PropTypes.func.isRequired,
}

export default ProductList;