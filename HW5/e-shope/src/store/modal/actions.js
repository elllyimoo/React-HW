import { MODAL_ACTION, OPEN_MODAL, CLOSE_MODAL} from "./types";

export const modalAction = (data) => {
    return {type: MODAL_ACTION, payload: data}
}

export const openModal = (data) => {
    return {type: OPEN_MODAL}
}

export const closeModal = () => {
    return {type: CLOSE_MODAL}
}