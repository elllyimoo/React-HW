import React from "react";
import Button from "./Button";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe(`Testing Button.js`, () => {
  const testText = 'some button';

  test(`Smoke test Button.js`, () => {
    render(<Button text={testText}/>)

    expect(screen.getByTestId('comp-button')).toBeInTheDocument();
    expect(screen.getByText(`${testText}`)).toBeInTheDocument();
    expect(screen.getByTestId('comp-button')).toHaveAttribute(`class`);
    expect(screen.getByTestId('comp-button')).toHaveAttribute(`type`);
  });


  test(`Testing button color`, () => {
    const testColor = "red";

    const {debug} = render(<Button text={testText} backgroundColor={testColor}/>);
    expect(screen.getByTestId('comp-button')).toHaveAttribute(`style`);
  });


  test(`Testing handleClick of button will be called`, () => {
    const testHandleClick = jest.fn();

    const {debug} = render(<Button text={testText} onClick={testHandleClick}/>);
    expect(testHandleClick).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId('comp-button'));
    expect(testHandleClick).toHaveBeenCalled();
  });


  test(`Testing if we throw icon in button - icon will render`, () => {
    const mockedIcon = <span data-testid="test-icon">Icon</span>;  // jest.mock('../Icon/Icon', () => () => mockedIcon);

    const {debug} = render(<Button text={testText} icon={mockedIcon}/>)

    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });


  test(`Testing if we throw quantity in button - quantity will render`, () => {
    const testQuantity = 1;

    const {debug} = render(<Button text={testText} quantity={testQuantity}/>)

    expect(screen.getByTestId('product-quantity')).toBeInTheDocument();
    expect(screen.getByTestId('product-quantity')).not.toBeNull();
  });

});