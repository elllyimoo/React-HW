import React from "react";
import './button.scss';
import PropTypes from 'prop-types';


const Button = (props) => {
    const {type, className, onClick, backgroundColor, text, icon, quantity} = props;
    return (
        <>
            <button
                type={type}
                className={className}
                onClick={onClick}
                style={{backgroundColor: backgroundColor}}>
                {text}
                {icon ? <span style={{position: 'relative', top: '7px', padding: '0 5px 0 10px'}}>{icon}</span> : null}
                {quantity ? <span style={{color: 'red'}}>{quantity}</span> : null}

            </button>
        </>
    );
}

Button.defaultProps = {
    type: "button",
    className: "myButton",
    onClick: null,
    icon: null,
    quantity: null,
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
}

export default Button;