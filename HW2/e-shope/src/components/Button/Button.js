import React, {Component} from "react";
import PropTypes from 'prop-types';
import scss from 'react';
import './button.scss';

class Button extends Component {
    render() {
        const {className, onClick, backgroundColor, text, icon, quantity} = this.props;
        return (
            <>
                <button
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
}

Button.defaultProps = {
    className: "myButton",
    icon: null,
    quantity: null,
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // icon: PropTypes.PropTypes.bool,   // ???
    // quantity: PropTypes.PropTypes.bool,   // ???
}

export default Button;