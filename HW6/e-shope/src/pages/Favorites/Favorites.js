import React from 'react';
import "./Favorites.scss";

import Product from "../../components/Product/Product";
import {useSelector} from "react-redux";


const Favorites = () => {
  const products = useSelector(state => state.products.products);

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
                    product={el}/>
              }
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

export default Favorites;