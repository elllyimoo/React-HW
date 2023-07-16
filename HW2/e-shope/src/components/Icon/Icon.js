import React from 'react';
import * as Icons from '../../themes/icons/';
import PropTypes from "prop-types";
import scss from 'react';
import './icons.scss';

class Icon extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {type, color, onClick, className} = this.props;     // console.log(color)

        const IconJSX = Icons[type]

        if (!IconJSX) return null

        return (
            <span onClick={onClick ? onClick : null} style={{cursor: 'pointer'}}>
                {IconJSX ({
                color: color,
                className: className,
            })}
            </span>
        );
    }
}

Icon.defaultProps = {
    color: 'lightgray',
    className: "icons",
    onClick: null
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Icon;