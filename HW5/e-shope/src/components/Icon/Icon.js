import React from 'react';
import * as Icons from '../../themes/icons/';
import PropTypes from "prop-types";
import './icons.scss';


const Icon = (props) => {
    const {type, color, onClick, className, tooltip} = props;     // console.log(color)

    const IconJSX = Icons[type]

    if (!IconJSX) return null

    return (
        <span onClick={onClick ? onClick : null} style={{cursor: 'pointer'}}>
                {IconJSX({
                    color: color,
                    className: className,
                })}
            {tooltip}
        </span>
    );

}

Icon.defaultProps = {
    color: 'lightgray',
    className: "icons",
    onClick: null,
    tooltip: null
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Icon;