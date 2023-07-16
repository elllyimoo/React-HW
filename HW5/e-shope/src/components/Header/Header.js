import React from 'react';
import './header.scss';

const Header = (props) => {
    const {navbar} = props;
    return (
        <>
            <section className="header-section">
                <div className="header-section__upLine"></div>

                <div className="header-section__content">

                    <span className="header-section__logo">TABstore</span>

                    <span className="header-section__navbar">
                        {/*<Navbar />*/}
                        {navbar}
                    </span>

                </div>
            </section>

        </>
    );
}

export default Header;
