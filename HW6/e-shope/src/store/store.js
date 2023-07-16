import reducer from "./reducer";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// import {compose} from "redux";
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore( reducer, compose( applyMiddleware(thunk), devTools) );

const store = createStore( reducer, composeWithDevTools(applyMiddleware(thunk)) );

export default store;