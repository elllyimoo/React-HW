import React from 'react';
// import PropTypes from 'prop-types';
import scss from 'react';
import './footer.scss';

class Footer extends React.Component {
    render() {
        const {} = this.props;
        return (
            <>
                <section className="footer-section">
                    <div className="footer-section__content">
                        <span>footer</span>
                        <span>footer</span>
                        <span>footer</span>
                    </div>
                    <div className="footer-section__bottomLine"></div>
                </section>

            </>
        );
    }
}

// Footer.defaultProps = {
// }
//
// Footer.propTypes = {
// }

export default Footer;