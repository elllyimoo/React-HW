import {SET_ID_OF_ACTIVE_PRODUCT} from "./types";

export const getIdOfActiveProduct = (data) => {
    return {type: SET_ID_OF_ACTIVE_PRODUCT, payload: data}
}