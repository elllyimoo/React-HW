import {OPEN_MODAL, MODAL_ACTION, CLOSE_MODAL} from "./types";

const initialStore = {
    isModalOpen: false,
    // whatsModalAction: true
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case MODAL_ACTION: {
            return {...state, whatsModalAction: action.payload}
        }

        case OPEN_MODAL: {
            return {...state, isModalOpen: true}
        }

        case CLOSE_MODAL: {
            return {...state, isModalOpen: false}
        }

        default:
            return state;
    }
}

export default reducer;