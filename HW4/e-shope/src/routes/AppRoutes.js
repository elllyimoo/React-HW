import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";
import ProductList from "../pages/ProductList/ProductList";
import Page404 from "../components/Page404/Page404";
// import PropTypes from "prop-types";


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

                <Route path="*" component={Page404}/>
            </Switch>
        </div>
    );
}

// AppRoutes.defaultProps = {}
// AppRoutes.propTypes = {}

export default AppRoutes;