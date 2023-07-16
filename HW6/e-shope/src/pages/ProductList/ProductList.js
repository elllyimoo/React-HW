import React from 'react';
import './productLists.scss';

import Product from "../../components/Product/Product";
import {useSelector} from "react-redux";


const ProductList = () => {
  const products = useSelector(state => state.products.products);

  return (
      <>
        <div style={{color: '#8f08dd'}}>ALL PRODUCTs</div>
        <div className='product-container'>
          {
            products.map(el => {
              return <Product
                  key={el.product_id}
                  product={el}/>
            })
          }
        </div>
      </>
  );
}

ProductList.defaultProps = {
  product: []
}

export default ProductList;