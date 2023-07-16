import React from 'react'
import './App.css';
import Button from "./components/Button/Button";
import Modal from './components/Modal/Modal';

const textForModal1 = "Once you delete this file, it won't be possible to undo this action. " +
    " Are you sure you want to delete it?";
const textForModal2 = "Once you save this file, you will be able to edit or delete it later. " +
    " Do you want to save the file?";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isFirstModalOpen: false,
            isSecondModalOpen: false
        }
    }

    firstModalOpen = () => {
        console.log('Clicked to open first Modal');
        this.setState(() => ({isFirstModalOpen: true}))
    }

    secondModalOpen = () => {
        console.log('Clicked to open second Modal');
        this.setState(() => ({isSecondModalOpen: true}))
    }

    modalClose = () => {
        console.log('Clicked to close Modal');
        this.setState(() => ({isFirstModalOpen: false}))
        this.setState(() => ({isSecondModalOpen: false}))
    }

    deleteItem = () => {
        console.log('Item deleted')
        this.modalClose();
    }

    cancelDelete = () => {
        console.log('Canceled delete item')
        this.modalClose();
    }

    saveItem = () => {
        console.log('Item saved')
        this.modalClose();
    }

    cancelSave = () => {
        console.log('Canceled save item')
        this.modalClose();
    }

    render() {
        const {isFirstModalOpen, isSecondModalOpen} = this.state
        return (
            <div className="App">
                <Button
                    onClick={this.firstModalOpen}
                    text='Open first modal to delete'
                    backgroundColor='#d11000'
                />

                <Button
                    onClick={this.secondModalOpen}
                    text='Open second modal to save'
                    backgroundColor='#036c06'
                />

                {(isFirstModalOpen) &&
                <Modal
                    toClose={this.modalClose}
                    header="Do you want to delete this file?"
                    // closer={true}
                    text={textForModal1}
                    actions={[
                        <Button
                            onClick={this.deleteItem}
                            backgroundColor='#d11000'
                            text='Delete'
                        />,
                        <Button
                            onClick={this.cancelDelete}
                            backgroundColor='gray'
                            text='Cancel'
                        />
                    ]}
                    backgroundColor='red'
                />
                }

                {(isSecondModalOpen) &&
                <Modal
                    toClose={this.modalClose}
                    header="Do you want to save this file?"
                    closer={false}
                    text={textForModal2}
                    actions={[
                        <Button
                            onClick={this.saveItem}
                            backgroundColor='#036c06'
                            text='Save item'
                        />,
                        <Button
                            onClick={this.cancelSave}
                            backgroundColor='gray'
                            text='Cancel'
                        />
                    ]}
                    backgroundColor='green'
                />
                }
            </div>
        );
    }
}

export default App;