import React from 'react';
import PropTypes from 'prop-types';
import scss from 'react';
import './avatar.scss';

class Avatar extends React.Component {
    render() {
        const { src } = this.props;
        return (
            <>
                <img src={src} alt="product" className="img-avatar" />
            </>
        );
    }
}
Avatar.propTypes = {
    src: PropTypes.string.isRequired
}

export default Avatar;