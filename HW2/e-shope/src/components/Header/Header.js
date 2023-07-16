import React from 'react';
// import PropTypes from 'prop-types';
import scss from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        const {} = this.props;
        return (
            <>
                <section className="header-section">
                    <div className="header-section__upLine"></div>
                    <div className="header-section__content">
                        <span className="header-section__logo">TABstore</span>
                        <span className="header-section__navbar">NAV BAR</span>
                    </div>
                </section>

            </>
        );
    }
}

// Header.defaultProps = {
// }
//
// Header.propTypes = {
// }

export default Header;
