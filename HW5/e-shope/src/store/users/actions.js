import {SET_USERS, REGISTER_USER, SET_ORDER_TO_USER, ORDER_PLACED} from "./types";

export const getUsersFromServer = () => {
    return {type: SET_USERS}   // !!! имитация работы с сервером (localStorage здесь использую как сервер !!!)
}

export const setUser = (data) => {
    // console.log(data)
    return {type: REGISTER_USER, payload: data}       //прилетают данные юзера {}
}

export const placeOrderToUser = (data) => {
    // console.log(data)
    return {type: SET_ORDER_TO_USER, payload: data}   //прилетают данные заказа [... с идентификатором юзера напр email]
}


export const orderPlaced = (data) => {
    return {type: ORDER_PLACED, payload: data}
}