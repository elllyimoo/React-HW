import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Modal from "./Modal";
import { render } from "@testing-library/react";
import { Provider} from "react-redux";
import {closeModal, openModal, modalAction} from "../../store/modal/actions";
import {MODAL_ACTION, OPEN_MODAL, CLOSE_MODAL} from "../../store/modal/types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe(`Testing actions Modal.js`,  () => {

  test(`Testing actions Modal.js`,() => {
    const store = mockStore({
      modal: {
        isModalOpen: true,
        whatsModalAction: ''
      }
    });

    render(
        <Provider store={store}>
          <Modal modalText='test Modal Body Text' actions={[]}
                 backgroundColor='gray' header='test Modal Header'/>
        </Provider>
    );

    console.log(store);
    store.dispatch(modalAction(true));
    store.dispatch(openModal());
    store.dispatch(closeModal());
    console.log(store.getActions());

    expect(store.getActions().length).toBe(3);

    expect(store.getActions().filter(el => el.type === MODAL_ACTION)[0].payload).toBeTruthy()
    // expect(store.getActions()[0].type).toBe(MODAL_ACTION); // expect(store.getActions()[0].payload).toBeTruthy();

    expect(store.getActions().filter(el => el.type === OPEN_MODAL)[0].payload).toBeTruthy()

    expect(store.getActions().filter(el => el.type === CLOSE_MODAL)[0].payload).toBeFalsy()
  });

});