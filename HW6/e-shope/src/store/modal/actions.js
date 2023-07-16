import { MODAL_ACTION, OPEN_MODAL, CLOSE_MODAL} from "./types";

export const modalAction = (data) => {
    return {type: MODAL_ACTION, payload: data}
}

export const openModal = () => {
    return {type: OPEN_MODAL, payload: true}
}

export const closeModal = () => {
    return {type: CLOSE_MODAL, payload: false}
}