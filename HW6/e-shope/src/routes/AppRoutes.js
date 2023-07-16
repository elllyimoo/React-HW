import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import ProductList from "../pages/ProductList/ProductList";
import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Page404 from "../components/Page404/Page404";


const AppRoutes = () => {
    return (
        <div className="app-routes">
            <Switch>
                <Redirect exact from="/" to="/home"/>

                <Route exact
                       path="/home"
                       render={(routerProps) => (
                           <ProductList {...routerProps} />
                       )}
                />

                <Route exact
                       path="/favorites"
                       render={(routerProps) => (
                           <Favorites {...routerProps} />
                       )}
                />

                <Route exact
                       path="/cart"
                       render={(routerProps) => (
                           <Cart {...routerProps} />
                       )}
                />

                <Route exact
                       path="/checkout"
                       render={(routerProps) => (
                           <Checkout {...routerProps} />
                       )}
                />

                <Route path="*" component={Page404}/>
            </Switch>
        </div>
    );
}

export default AppRoutes;