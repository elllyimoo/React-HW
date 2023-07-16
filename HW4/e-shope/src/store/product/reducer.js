import {SET_ID_OF_ACTIVE_PRODUCT} from "./types";

const initialState = {
    activeProductID: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ID_OF_ACTIVE_PRODUCT:
            return {...state, activeProductID: action.payload}
        default:
            return state
    }
}

export default reducer;