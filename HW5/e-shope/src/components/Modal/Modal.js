import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

import {useDispatch} from "react-redux";
import {closeModal} from "../../store/modal/actions";


const Modal = (props) => {
    const {header, closer, modalText, actions, backgroundColor} = props;       // console.log("Modal ", this)


    const dispatch = useDispatch();
    const getElementToCloseModal = (e) => {
        if (e.target.dataset.close) {                                  // console.log(e.target.dataset.close)
            dispatch(closeModal());
        }
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
}

export default Modal;