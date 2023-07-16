import {OPEN_MODAL, MODAL_ACTION, CLOSE_MODAL} from "./types";

const initialStore = {
    isModalOpen: false,
    whatsModalAction: ''
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case MODAL_ACTION: {
            return {...state, whatsModalAction: action.payload}
        }

        case OPEN_MODAL: {
            return {...state, isModalOpen: action.payload}
        }

        case CLOSE_MODAL: {
            return {...state, isModalOpen: action.payload}
        }

        default:
            return state;
    }
}

export default reducer;