import React from "react";
import Modal from "./Modal";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {Provider, useDispatch} from "react-redux";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe(`Testing Modal.js`, () => {
  const testModalText = 'modal body text', testModalHeader = 'modal header text', testModalBackgroundColor = 'gray';
  const store = mockStore({
    modal: {
      isModalOpen: true,
      whatsModalAction: ''
    }
  });

  test(`Smoke test Modal.js modal opened`, () => {
    const {debug} = render(
        <Provider store={store}>
          <Modal modalText={testModalText} actions={[]}
                 backgroundColor={testModalBackgroundColor} header={testModalHeader}/>
        </Provider>
    );
    debug();
    expect(screen.getByTestId("my-modal")).toBeInTheDocument();
  });


  test(`Testing function getElementToCloseModal in Modal.js`, () => {
    const dispatch = jest.fn();
    const closeModal = jest.fn();

    const getElementToCloseModalTest = jest.fn((e) => {
      if (e.target.dataset.close) {
        dispatch(closeModal());
      }
    });

    const mockedElementToClose = <div data-testid="to-close" data-close={true} onClick={getElementToCloseModalTest}>Some element to close modal</div>

    const {debug} = render(
        <Provider store={store}>
          {mockedElementToClose}
          <Modal modalText={testModalText} actions={[]}
                 backgroundColor={testModalBackgroundColor} header={testModalHeader} />
        </Provider>
    );

    debug()

    userEvent.click(screen.getByTestId(`to-close`));

    expect(getElementToCloseModalTest).toHaveBeenCalled();

    expect(closeModal).toHaveBeenCalled();
  });


  test(`Expecting closer in component Modal`, () => {
    const testCloser = true;
    render(
        <Provider store={store}>
          <Modal modalText={testModalText} actions={[]}
                 backgroundColor={testModalHeader} header={testModalBackgroundColor}
                 closer={testCloser}
          />
        </Provider>
    );
    expect(screen.getByTestId('modal-closer')).toBeInTheDocument();
  });


  test(`Expecting actions buttons are in component Modal and onClick fn can be called`, () => {
    const testText = 'button text';
    const testHandleClick = jest.fn();
    const mockedButtonOk =
        <button data-testid="test-button-ok" text={testText} onClick={testHandleClick}>Button</button>;
    const mockedButtonCancel =
        <button data-testid="test-button-cancel" text={testText} onClick={testHandleClick}>Button</button>;

    const actions = [
      mockedButtonOk,
      mockedButtonCancel
    ]

    render(
        <Provider store={store}>
          <Modal modalText={testModalText} actions={actions}
                 backgroundColor={testModalHeader} header={testModalBackgroundColor}
          />
        </Provider>
    );

    expect(actions[0].props.onClick).not.toHaveBeenCalled();
    expect(actions[1].props.onClick).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId(`test-button-ok`));
    expect(actions[0].props.onClick).toHaveBeenCalled();

    userEvent.click(screen.getByTestId(`test-button-cancel`));
    expect(actions[1].props.onClick).toHaveBeenCalled();
  });

});