import reducer from "../../store/modal/reducer";
import {MODAL_ACTION, OPEN_MODAL, CLOSE_MODAL} from "../../store/modal/types";

describe(`Testing modal reducer`, () => {

  test(`default is returning modal state with no changes`, () => {
    const initialStore = {
      isModalOpen: false,
      whatsModalAction: ''
    }

    const action = {}

    const stateWithNOUpdate = reducer(initialStore, action);
    expect(stateWithNOUpdate.isModalOpen).toBeFalsy();
    expect(stateWithNOUpdate.whatsModalAction).toBe('');

  });


  test(`MODAL_ACTION is changing whatsModalAction in modal state`, () => {
    const initialStore = {
      isModalOpen: false,
      whatsModalAction: ''
    }

    const action = {
      type: MODAL_ACTION,
      payload: true
    }

    const stateWithUpdate = reducer(initialStore, action);
    expect(stateWithUpdate.whatsModalAction).toBe(action.payload);
    expect(stateWithUpdate.isModalOpen).toBeFalsy();
  });


  test(`OPEN_MODAL is changing isModalOpen in modal state`, () => {
    const initialStore = {
      isModalOpen: false,
      whatsModalAction: true
    }

    const action = {
      type: OPEN_MODAL,
      payload: true
    }

    const stateWithUpdate = reducer(initialStore, action);
    expect(stateWithUpdate.isModalOpen).toBe(action.payload);
    expect(stateWithUpdate.isModalOpen).toBeTruthy();
    expect(stateWithUpdate.whatsModalAction).toBeTruthy();
  });


  test(`CLOSE_MODAL is changing isModalOpen in modal state`, () => {
    const initialStore = {
      isModalOpen: true,
      whatsModalAction: true
    }

    const action = {
      type: CLOSE_MODAL,
      payload: false
    }

    const stateWithUpdate = reducer(initialStore, action);
    expect(stateWithUpdate.isModalOpen).toBe(action.payload);
    expect(stateWithUpdate.isModalOpen).toBeFalsy();
    expect(stateWithUpdate.whatsModalAction).toBeTruthy();
  });

});
