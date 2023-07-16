import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';


const Modal = (props) => {
    const {header, closer, modalText, actions, backgroundColor} = props;    // console.log("Modal ", this)

    const getElementToCloseModal = (e) => {
        if (e.target.dataset.close) {      // console.log(e.target.dataset.close)
            closeModal()
        }
    }

    const closeModal = () => {
        const {toClose} = props;
        toClose();      // console.log('modal close');
    }

    return (
        <>
            <div className='myModal' onClick={getElementToCloseModal}>
                <div className="myModal-overlay" data-close={true}>
                    <div className="myModal-window" style={{backgroundColor: backgroundColor}}>
                        <div className="myModal-window__header">
                            <span className="myModal-title"> {header} </span>
                            {(closer && <span className="myModal-closer" data-close={true}>&times;</span>)}
                        </div>

                        <div className="myModal-window__body"> {modalText} </div>

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

Modal.defaultProps = {
    closer: true,
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    closer: PropTypes.bool,
    modalText: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    toClose: PropTypes.func.isRequired
}

export default Modal;