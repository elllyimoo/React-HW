import React from 'react';
import scss from 'react';
import './productLists.scss';
import PropTypes from 'prop-types';
import Product from "../Product/Product";
import Loading from '../Loading/Loading';

class ProductList extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {isLoading, products, isModalOpen,
            toOpenModal,  whoOpen, toCloseModal,
            toggleFavorite,} = this.props;              // console.log(products);

        if (isLoading) { return <Loading /> }

            return (
                <div className='product-container'>
                    {products.map(el => {                       // {console.log(el)}
                        return <Product
                            isModalOpen={isModalOpen}
                            whoOpen={whoOpen}
                            toOpenModal={toOpenModal}
                            toCloseModal={toCloseModal}

                            toggleFavorite={toggleFavorite}

                            key={el.product_id}
                            product={el} />
                    })}
                </div>
        );
    }
}

ProductList.defaultProps = {
}

ProductList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    toOpenModal: PropTypes.func.isRequired,
    whoOpen: PropTypes.func.isRequired,
    toCloseModal: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
}

export default ProductList;