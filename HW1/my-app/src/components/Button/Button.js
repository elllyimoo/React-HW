import React, {Component} from "react";
import PropTypes from 'prop-types';
import scss from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        const {onClick, backgroundColor, text} = this.props;
        return (
            <>
                <button className='myButton' onClick={onClick} style={{backgroundColor: backgroundColor}}>
                    {text}
                </button>
            </>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;