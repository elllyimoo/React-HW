import React from 'react';
import PropTypes from 'prop-types';
import './avatar.scss';

const Avatar = (props) => {
    const {src} = props;
    return (
        <>
            <img src={src} alt="product" className="img-avatar"/>
        </>
    );
}


// Avatar.defaultProps = {
// }

Avatar.propTypes = {
    src: PropTypes.string.isRequired
}

export default Avatar;