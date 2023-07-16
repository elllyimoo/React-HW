import React from 'react';
import PropTypes from 'prop-types';
import scss from 'react';
import './Modal.scss';
import Button from "../Button/Button";

class Modal extends React.Component {

    getElementToCloseModal = (e) => {
        if (e.target.dataset.close) {   // console.log(e.target.dataset.close)
            this.closeModal()
        }
    }

    closeModal = () => {
        const {toClose} = this.props;
        toClose();      // console.log('modal close');
    }

    render() {
        const {header, closer, text, actions, backgroundColor} = this.props;    // console.log("Modal ", this)

        return (
            <>
                <div className='myModal' onClick={this.getElementToCloseModal}>
                    <div className="myModal-overlay" data-close={true}>
                        <div className="myModal-window" style={{backgroundColor: backgroundColor}}>
                            <div className="myModal-window__header">
                                <span className="myModal-title"> {header} </span>
                                {(closer && <span className="myModal-closer" data-close={true}>&times;</span>)}
                            </div>

                            <div className="myModal-window__body"> {text} </div>

                            <div className="myModal-window__footer">
                                {
                                    actions.map((el, index) => {
                                        return (
                                            <span key={index}> {el} </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Modal.defaultProps = {
    closer: true
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    closer: PropTypes.bool,
    text: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    toClose: PropTypes.func.isRequired
}

export default Modal;